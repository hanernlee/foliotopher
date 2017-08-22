import React, { Component } from 'react';
import Radium from 'radium';
import { connect } from 'react-redux';
import { fadeIn } from 'react-animations';


import { fetchWorks } from '../firebase/actions';

class Work extends Component {
  componentDidMount() {
    this.props.fetchWorks();
  }

  navigate = () => {

  }

  renderWork() {
    if (this.props.worksList) {
      return this.props.worksList.map((work) => {
        return (
          <div key={work.key} style={styles.worksImage}>{work.id}</div>
        );
      });
    }
  }

  render() {
    const slidingIn = this.props.navigationState ? styles.slidein : '';

    return (
      <div style={[styles.landingContainer, slidingIn]}>
        <div style={styles.workGallery}>
          {this.renderWork()}
        </div>
        <div onClick={this.navigate} style={styles.navigation}>Next</div>
        <div onClick={this.navigate} style={styles.navigation}>Back</div>
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
    opacity: '0',
    animation: 'ease 2.4s forwards',
    animationName: fadingIn,
  }
}
