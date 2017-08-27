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
            <div key={work.key} style={[styles.worksImage, {backgroundImage: `url(${work.image})`}]}>
              <span style={styles.worksTitle}>{work.title}</span>
            </div>
          );
        }
        return false;
      });
    }
  }

  render() {
    const slidingIn = this.props.navigationState ? styles.slidein : '';
    const galleryImageLoaded = this.state.workEntries.length ? true : false;

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
        <div style={styles.workGalleryHolder}>
          <div key="gallery" style={styles.workGallery}>
            <div style={styles.aspectRatio}>
              {galleryImageLoaded && <div style={styles.workGalleryHeader}>
                <div style={styles.workGalleryHeaderLine}></div>
                <div style={styles.workGalleryHeaderTitle}>Work</div>
              </div>}
              <div onClick={this.navigateNext} style={styles.navigationNext}>
                <div style={styles.arrowContainerNext}>
                  <div style={[styles.arrowUpNextReverse, Radium.getState(this.state, 'gallery', ':hover') ? styles.arrowUpNext : '']}></div>
                  <div style={[styles.arrowDownNextReverse, Radium.getState(this.state, 'gallery', ':hover') ? styles.arrowDownNext : '']}></div>
                </div>
              </div>
              <div onClick={this.navigateBack} style={styles.navigationBack}>
                <div style={styles.arrowContainerBack}>
                  <div style={[styles.arrowUpBackReverse, Radium.getState(this.state, 'gallery', ':hover') ? styles.arrowUpBack : '']}></div>
                  <div style={[styles.arrowDownBackReverse, Radium.getState(this.state, 'gallery', ':hover') ? styles.arrowDownBack : '']}></div>
                </div>
              </div>
              <Dots
                dotsCount={this.props.worksList.length}
                currentCount={this.state.count}
                dotClick={this.dotClick}
              />
              {this.renderWork()}
            </div>
          </div>
        </div>
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

var fadeInLeft = Radium.keyframes({
  'from': {
    opacity: '0',
    transform: 'translateX(-15px)'
  },
  'to': {
    opacity: '1',
    transform: 'translateX(0)'
  }
});

var fadeIn = Radium.keyframes({
  'from': {
    opacity: '0',
  },
  'to': {
    opacity: '1',
  }
});

var growLeft = Radium.keyframes({
  'from': {
    opacity: '0',
    transform: 'scaleX(0)'
  },
  'to': {
    opacity: '1',
    transform: 'scaleX(1)'
  }
});

var slideUp = Radium.keyframes({
  'from': {
    opacity: '0',
    transform: 'translate(-50%, -40%)'
  },
  'to': {
    opacity: '1',
    transform: 'translate(-50%, -50%)'
  }
});

var slideDown = Radium.keyframes({
  'from': {
    opacity: '0',
    transform: 'translateY(0)'
  },
  'to': {
    opacity: '1',
    transform: 'translateY(50px)'
  }
});

var styles = {
  arrowContainerNext: {
    position: 'absolute',
    top: 'calc(50% - 20px)',
    left: '-61px',
    zIndex: '1',
    padding: '20px',
    opacity: '1',
    transition: '0.3s ease all'
  },
  arrowContainerBack: {
    position: 'absolute',
    top: 'calc(50% - 20px)',
    zIndex: '1',
    padding: '20px',
    transition: '0.5s ease all'
  },
  arrowUpNext: {
    transform: 'translateY(-6px) rotate(45deg) scaleX(1)',
    opacity: '1',
  },
  arrowUpNextReverse: {
    width: '21px',
    height: '2px',
    backgroundColor: 'white',
    transform: 'translateY(-6px) rotate(45deg) scaleX(0)',
    transition: '0.8s ease all',
    opacity: '0',
  },
  arrowDownNext: {
    transform: 'translateY(6px) rotate(-45deg) scaleX(1)',
    opacity: '1',
  },
  arrowDownNextReverse: {
    width: '21px',
    height: '2px',
    backgroundColor: 'white',
    transform: 'translateY(6px) rotate(-45deg) scaleX(0)',
    transition: '1.2s ease all',
    opacity: '0'
  },
  arrowUpBack: {
    transform: 'translateY(-6px) rotate(-45deg) scaleX(1)',
    opacity: '1',
  },
  arrowUpBackReverse: {
    width: '21px',
    height: '2px',
    backgroundColor: 'white',
    transition: '0.8s ease all',
    transform: 'translateY(-6px) rotate(-45deg) scaleX(0)',
    opacity: '0',
  },
  arrowDownBack: {
    transform: 'translateY(6px) rotate(45deg) scaleX(1)',
    opacity: '1',
  },
  arrowDownBackReverse: {
    width: '21px',
    height: '2px',
    backgroundColor: 'white',
    transform: 'translateY(6px) rotate(45deg) scaleX(0)',
    transition: '1.2s ease all',
    opacity: '0'
  },
  aspectRatio: {
    position: 'absolute',
    top: '0',
    bottom: '0',
    left: '0',
    right: '0'
  },
  hiddenHackContainer: {
    display: 'none',
    pointerEvents: 'none'
  },
  landingContainer: {
    height: '100vh',
    position: 'relative',
    transition: 'transform 1s ease',
    overflow: 'hidden',
    backgroundColor: '#191919',

    '@media (max-width: 830px)': {
      padding: '0 56px'
    },
    '@media (max-width: 720px)': {
      padding: '0 32px'
    }
  },
  navigationNext: {
    position: 'absolute',
    right: '0',
    zIndex: '1',
    height: '100%'
  },
  navigationBack: {
    position: 'absolute',
    left: '0',
    zIndex: '1',
    height: '100%'
  },
  slidein: {
    transform: 'translateX(-300px)',
    position: 'relative',
    transition: 'transform 1.2s ease',
    opacity: '0.2',

    '@media (min-width: 720px)': {
      minHeight: 'calc(100vh - 80px)',
      transform: 'translateX(-400px)',
    }
  },
  workGallery: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    textAlign: 'center',
    backgroundColor: '#0C0C0C',
    paddingTop: '56.25%',
    width: '100%',
    opacity: '0',
    animation: 'ease 2.4s forwards',
    animationName: slideUp,

    // Need to add empty :hover styles here to tell Radium to track this element's
    // state.
    ':hover': {},

    '@media (max-width: 780px)': {
      width: '100%'
    }
  },
  workGalleryHolder: {
    position: 'relative',
    height: '100%',
    width: '720px',
    margin: '0 auto',

    '@media (max-width: 830px)': {
      width: '100%'
    },
  },
  workGalleryHeader: {
    position: 'absolute',
    top: '-30px',
    color: 'white',
    width: '100%',
    display: 'flex',
    alignItems: 'center'
  },
  workGalleryHeaderLine: {
    height: '1px',
    backgroundColor: 'white',
    flex: '1 1 90%',
    transformOrigin: 'left',
    opacity: '0',
    animation: 'cubic-bezier(0.785, 0.135, 0.15, 0.86) 1.2s forwards',
    animationName: growLeft,

    '@media (max-width: 515px)': {
      flex: '1 1 85%',
    },
  },
  workGalleryHeaderTitle: {
    textAlign: 'right',
    flex: '1 1 auto',
    opacity: '0',
    animation: 'ease 0.4s forwards',
    animationName: fadeInLeft,
    animationDelay: '1s',
  },
  worksImage: {
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    opacity: '0',
    animation: 'ease 1.2s forwards',
    animationName: fadeIn,
    height: '100%',
    width: '100%'
  },
  worksTitle: {
    position: 'absolute',
    bottom: '0px',
    fontSize: '40px',
    fontWeight: 'bold',
    left: '0',
    color: 'white',
    opacity: '0',
    animation: 'ease 0.8s forwards',
    animationName: slideDown,
    animationDelay: '0.4s',
  }
}
