import React, { Component } from 'react';
import Radium from 'radium';
import { connect } from 'react-redux';
import SwipeableViews from 'react-swipeable-views';

import { fetchWorks } from '../firebase/actions';
import { getRoute } from '../routes/actions';

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
    this.props.getRoute(this.props.match.url);
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

  onChangeIndex(index, indexLatest) {
    this.setState({
      count: index
    });
  }

  renderWorkTitle() {
    if (this.props.worksList) {
      return this.state.workEntries.map((work, index) => {
        if (this.state.count === index) {
          return (
            <div key={work.key} style={styles.worksTitle}>{work.title}</div>
          );
        }
      });
    }
  }

  renderWorkImage() {
    if (this.props.worksList) {
      return this.state.workEntries.map((work, index) => {
          return (
            <div key={work.key} style={[styles.worksImage, {backgroundImage: `url(${work.image})`}]}></div>
          );
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
            {this.renderWorkTitle()}
            <div style={styles.aspectRatio}>
              <Dots
                dotsCount={this.props.worksList.length}
                currentCount={this.state.count}
                dotClick={this.dotClick}
              />
            <SwipeableViews index={this.state.count} enableMouseEvents onChangeIndex={this.onChangeIndex.bind(this)} style={styles.swipeableViews}>
              {this.renderWorkImage()}
            </SwipeableViews>
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

export default connect(mapStateToProps, { fetchWorks, getRoute })(Radium(Work));

var fadeInLeft = Radium.keyframes({
  'from': {
    opacity: '0',
    transform: 'translateX(-50px)'
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

var styles = {
  slide: {
  padding: 15,
  minHeight: 100,
  color: '#fff',
},
slide1: {
  background: '#FEA900',
},
slide2: {
  background: '#B3DC4A',
},
slide3: {
  background: '#6AC0FF',
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
    height: '100%',

    '@media (max-width: 415px)': {
      display: 'none'
    },
  },
  navigationBack: {
    position: 'absolute',
    left: '0',
    zIndex: '1',
    height: '100%',

    '@media (max-width: 415px)': {
      display: 'none'
    },
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
  swipeableViews: {
    height: '100%'
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
  worksImageContainer: {
    height: '100%'
  },
  worksTitle: {
    position: 'absolute',
    top: '-30px',
    left: '0',
    color: '#FFFFFF',
    opacity: '0',
    animation: 'ease 1.2s forwards',
    animationName: fadeInLeft,
  },
  worksImage: {
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    opacity: '0',
    animation: 'ease 1.2s forwards',
    animationName: fadeIn,
    height: '100%',
    width: '100%',
    transition: '0.8s ease all',
    filter: 'opacity(20%) grayscale(100%)',

    ':hover': {
      cursor: 'pointer',
      filter: 'none',
      transform: 'scale(1.1)'
    }
  },
}
