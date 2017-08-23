import React, { Component } from 'react';
import Radium from 'radium';
import { connect } from 'react-redux';

import { fetchWorks } from '../firebase/actions';
import Dots from './dots/index';

class Work extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      workEntries: []
    }
  }

  componentDidMount() {
    this.props.fetchWorks();
  }

  dotClick = (dotIndex) => {
    this.setState({
      count: dotIndex
    });
  }

  navigateNext = () => {
    const workListLength = this.props.worksList.length - 1;
    const currentCount = this.state.count;

    if (currentCount >= 0 && currentCount !== workListLength) {
      this.setState({
        count: currentCount + 1
      });
    } else {
      this.setState({
        count: 0
      });
    }
  }

  navigateBack = () => {
    const workListLength = this.props.worksList.length - 1;
    const currentCount = this.state.count;

    if (currentCount >= 1) {
      this.setState({
        count: currentCount - 1
      });
    } else {
      this.setState({
        count: workListLength
      });
    }
  }

  onLoad(work) {
    this.setState(({ workEntries }) => {
      return { workEntries: workEntries.concat(work) }
    });
  }

  renderWork() {
    if (this.props.worksList) {
      return this.state.workEntries.map((work, index) => {
        if (this.state.count === index) {
          return (
            <div key={work.key} style={[styles.worksImage, {backgroundImage: `url(${work.image})`}]}></div>
          );
        }
        return false;
      });
    }
  }

  render() {
    const slidingIn = this.props.navigationState ? styles.slidein : '';

    if (!this.props.worksList) {
      return (<div></div>);
    }

    return (
      <div style={[styles.landingContainer, slidingIn]}>
        <div style={styles.hiddenHackContainer}>
          {this.props.worksList.map((work, index) =>
            <img src={work.image} alt={work.name} key={index} onLoad={this.onLoad.bind(this, work)} />
          )}
        </div>
        <div style={styles.workGallery}>
          {this.renderWork()}
        </div>
        <Dots
          dotsCount={this.props.worksList.length}
          currentCount={this.state.count}
          dotClick={this.dotClick}
        />
        <div onClick={this.navigateNext} style={styles.navigation}>Next</div>
        <div onClick={this.navigateBack} style={styles.navigation}>Back</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    navigationState: state.navigationState,
    worksList: state.worksList
  };
};

export default connect(mapStateToProps, { fetchWorks })(Radium(Work));

var fadingIn = Radium.keyframes({
  'from': {
    opacity: '0',
    transform: 'translateX(-15px)'
  },
  'to': {
    opacity: '1',
    transform: 'translateX(0)'
  }
});

var styles = {
  landingContainer: {
    height: '100vh',
    left: '0px',
    position: 'relative',
    transition: 'left 0.4s ease-in-out',
  },
  slidein: {
    left: '-200px',
    position: 'relative',
    transition: 'left 1.0s cubic-bezier(0.43, 0.17, 0.28, 0.99)',

    '@media (min-width: 720px)': {
      minHeight: 'calc(100vh - 80px)',
      left: '-300px',
    }
  },
  workGallery: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    backgroundColor: 'red',
    width: '720px',
    height: '420px'
  },
  navigation: {
    color: 'white'
  },
  worksImage: {
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    backgroundPosition: 'center center',
    opacity: '0',
    animation: 'ease 2.4s forwards',
    animationName: fadingIn,
    height: '100%',
    width: '100%'
  },
  hiddenHackContainer: {
    display: 'none',
    pointerEvents: 'none'
  }
}
