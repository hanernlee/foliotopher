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
      workEntries: [],
      selectedWork: null
    }
  }

  componentDidMount() {    this.props.fetchWorks();
    this.props.getRoute(this.props.match.url);
  }

  dotClick = (dotIndex) => {
    this.setState({
      count: dotIndex,
      selectedWork: null
    });
  }

  deselectWork() {
    this.setState({
      selectedWork: null
    });
  }

  selectWork(work) {
    this.setState({
      selectedWork: work
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
  //
  // navigateBack = () => {
  //   const workListLength = this.props.worksList.length - 1;
  //   const currentCount = this.state.count;
  //
  //   if (currentCount >= 1) {
  //     this.setState({
  //       count: currentCount - 1
  //     });
  //   } else {
  //     this.setState({
  //       count: workListLength
  //     });
  //   }
  // }

  onLoad(work) {
    this.setState(({ workEntries }) => {
      return { workEntries: workEntries.concat(work) }
    });
  }

  onChangeIndex(index, indexLatest) {
    this.setState({
      count: index,
      selectedWork: false
    });
  }

  renderInfo() {
    const selectedWork = this.state.selectedWork;

    if (this.props.worksList) {
      return this.state.workEntries.map((work, index) => {
        if (this.state.count === index) {
          return (
            <div key={index} onClick={this.selectWork.bind(this, work)} style={styles.infoContainer}>
              <div style={[styles.infoLine, selectedWork ? styles.hideInfoLine : styles.showInfoLine]}></div>
              <div style={[styles.info, selectedWork ? styles.hideInfo : styles.showInfo]}>Info</div>
            </div>
          );
        }
        return false;
      });
    }
  }

  renderWorkTitle() {
    const selectedWork = this.state.selectedWork;

    if (this.props.worksList) {
      return this.state.workEntries.map((work, index) => {
        if (this.state.count === index) {
          return (
            <div key={work.key} style={styles.worksContainer}>
              <span onClick={this.selectWork.bind(this, work)} key="workTitle" style={[styles.worksTitle, selectedWork ? styles.hideWorksTitle : styles.showWorksTitle]}>{work.title}</span>
              <span onClick={this.selectWork.bind(this, work)} key="workDesc" style={[styles.worksDescription, selectedWork ? styles.hideWorksDescription : styles.showWorksDescription]}>
                - Retro Bit Bit Bit
              </span>
            </div>
          );
        }
        return false;
      });
    }
  }

  renderWorkImage() {
    const selectedWork = this.state.selectedWork;

    if (this.props.worksList) {
      return this.state.workEntries.map((work, index) => {
          return (
            <div onClick={this.navigateNext.bind(this)} key={work.key} style={[styles.worksImage, selectedWork ? styles.hideWorksImage : styles.showWorksImage, {backgroundImage: `url(${work.image})`}]}></div>
          );
      });
    }
  }

  renderSelectedWork() {
    const work = this.state.selectedWork;

    if (work) {
      return (
        <div onClick={this.deselectWork.bind(this)} style={[styles.selectedWorkContainer, work ? styles.showSelectedWorkContainer : styles.hideSelectedWorkContainer ]}>
          <div style={[styles.selectedTitle, work ? styles.showSelectedTitle : '']}>{work.title}</div>
          <div style={styles.flexContainer}>
            <div style={[styles.leftSelected, work ? styles.showLeftSelected : '']}>
              <div style={[styles.selectedImage, {backgroundImage: `url(${work.image})`}]}></div>
            </div>
            <div style={[styles.rightSelected, work ? styles.showRightSelected : '']}>
              <div style={styles.selectedDescription}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque excepturi veritatis quis, culpa hic quisquam suscipit dolor.
              </div>
              <a target="_blank" href={work.github} rel="noopener noreferrer external" onClick={(e) => {e.stopPropagation()}} style={[styles.externalLink]}>GitHub</a>
            </div>
          </div>
        </div>
      )
    }
  }

  render() {
    const slidingIn = this.props.navigationState ? styles.slidein : '';
    // const galleryImageLoaded = this.state.workEntries.length ? true : false;

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
            {this.renderSelectedWork()}
            {this.renderWorkTitle()}
            <div style={styles.aspectRatio}>
              <Dots
                dotsCount={this.props.worksList.length}
                currentCount={this.state.count}
                dotClick={this.dotClick}
              />
            <SwipeableViews index={this.state.count} onChangeIndex={this.onChangeIndex.bind(this)} style={styles.swipeableViews}>
              {this.renderWorkImage()}
            </SwipeableViews>
            </div>
            {this.renderInfo()}
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

var fadeOut = Radium.keyframes({
  'from': {
    opacity: '1',
  },
  'to': {
    opacity: '0',
  }
});

var grow = Radium.keyframes({
  'from': {
    opacity: '0',
    transform: 'scaleY(0)',
  },
  'to': {
    opacity: '0.2',
    transform: 'scaleY(1)',
  }
});

var shrink = Radium.keyframes({
  'from': {
    opacity: '0.2',
    transform: 'scaleY(1)',
  },
  'to': {
    opacity: '0',
    transform: 'scaleY(0)',
  }
});

var fadeInLeftHide = Radium.keyframes({
  'from': {
    opacity: '1',
    transform: 'translateX(0px)'
  },
  'to': {
    opacity: '0',
    transform: 'translateX(-50px)'
  }
});

var rotate = Radium.keyframes({
  'from': {
    opacity: '0',
    transform: 'rotate(0)',
  },
  'to': {
    opacity: '1',
    transform: 'rotate(270deg)',
  }
});

var rotateHide = Radium.keyframes({
  'from': {
    opacity: '1',
    transform: 'rotate(270deg)',
  },
  'to': {
    opacity: '0',
    transform: 'rotate(0deg)',
  }
});

var slideDown = Radium.keyframes({
  'from': {
    opacity: '0',
    transform: 'translatey(-15px)'
  },
  'to': {
    opacity: '1',
    transform: 'translatey(0px)'
  }
});

var slideDownHide = Radium.keyframes({
  'from': {
    opacity: '1',
    transform: 'translatey(0px)'
  },
  'to': {
    opacity: '0',
    transform: 'translatey(-15px)'
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

var slideUpSelected = Radium.keyframes({
  'from': {
    opacity: '0',
    transform: 'translateY(50px)'
  },
  'to': {
    opacity: '1',
    transform: 'translateY(0)'
  }
});

var styles = {
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
  infoContainer: {
    position: 'absolute',
    left: '50%',
    bottom: '-50px',
    color: '#FFFFFF',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    cursor: 'pointer'
  },
  infoLine: {
    height: '50px',
    width: '1px',
    backgroundColor: '#FFFFFF',
  },
  showInfoLine: {
    transformOrigin: 'top',
    opacity: '0',
    animation: 'cubic-bezier(0.785, 0.135, 0.15, 0.86) 1.2s forwards',
    animationName: grow,
    animationDelay: '0.4s'
  },
  hideInfoLine: {
    transformOrigin: 'bottom',
    opacity: '0.2',
    animation: 'cubic-bezier(0.785, 0.135, 0.15, 0.86) 1.2s forwards',
    animationName: shrink,
    animationDelay: '0.8s'
  },
  info: {
    position: 'relative',
    top: '10px',
    fontSize: '12px',
    opacity: '0',
  },
  showInfo: {
    animation: 'cubic-bezier(0.785, 0.135, 0.15, 0.86) 1.2s forwards',
    animationName: rotate,
    animationDelay: '0.8s'
  },
  hideInfo: {
    animation: 'cubic-bezier(0.785, 0.135, 0.15, 0.86) 1.2s forwards',
    animationName: rotateHide,
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
    boxShadow: '10px 10px 20px rgba(0,0,0,0.30)',
    opacity: '0',
    transition: '0.3s ease all',
    animation: 'ease 2.4s forwards',
    animationName: slideUp,

    // Need to add empty :hover styles here to tell Radium to track this element's
    // state.
    ':hover': {
      boxShadow: '20px 20px 40px rgba(0,0,0,0.30)',
    },

    '@media (max-width: 780px)': {
      width: '100%'
    }
  },
  workGalleryHolder: {
    position: 'relative',
    height: '100%',
    width: '780px',
    margin: '0 auto',

    '@media (max-width: 830px)': {
      width: '100%'
    },
  },
  worksImageContainer: {
    height: '100%'
  },
  worksContainer: {
    position: 'absolute',
    top: '35%',
    left: '-12%',
    zIndex: '1',
    color: '#FFFFFF',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    userSelect: 'none',
    transition: '1.2s cubic-bezier(0.785, 0.135, 0.15, 0.86)',

    '@media (max-width: 1024px)': {
      top: '-55px',
      left: '0'
    },
  },
  worksTitle: {
    fontSize: '80px',
    color: '#FFFFFF',
    userSelect: 'none',
    transition: '1.2s cubic-bezier(0.785, 0.135, 0.15, 0.86)',

    ':hover': {
      cursor: 'pointer',
    },

    '@media (max-width: 1024px)': {
      fontSize: '40px'
    },
  },
  showWorksTitle: {
    opacity: '0',
    animation: 'ease 1.2s forwards',
    animationName: fadeInLeft,
    animationDelay: '0.4s'
  },
  hideWorksTitle: {
    opacity: '1',
    animation: 'ease 1.2s forwards',
    animationName: fadeInLeftHide,
    animationDelay: '0.4s'
  },
  worksDescription: {
    marginRight: 'auto',
    fontSize: '12px',
    paddingTop: '15px',
    userSelect: 'none',

    ':hover': {
      cursor: 'pointer',
    },

    '@media (max-width: 1024px)': {
      color: 'transparent'
    },
  },
  showWorksDescription: {
    opacity: '0',
    animation: 'ease 1.2s forwards',
    animationName: slideDown,
    animationDelay: '0.8s',

  },
  hideWorksDescription: {
    opacity: '1',
    animation: 'ease 1.2s forwards',
    animationName: slideDownHide,
  },
  worksImage: {
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    height: '100%',
    width: '100%',
    transition: '0.8s ease all',
    filter: 'opacity(20%) grayscale(100%)',

    ':hover': {
      cursor: 'pointer',
    }
  },
  showWorksImage: {
    opacity: '0',
    animation: 'ease 1.2s forwards',
    animationName: fadeIn,
  },
  hideWorksImage: {
    opacity: '1',
    animation: 'ease 1.2s forwards',
    animationName: fadeOut,
    animationDelay: '0.8s',
    pointerEvents: 'none'
  },
  leftSelected: {
    display: 'flex',
    flexDirection: 'column',
    flex: '1 0 0px',
    paddingRight: '30px',

    '@media (max-width: 480px)': {
      paddingRight: '15px',
    },
  },
  showLeftSelected: {
    opacity: '0',
    animation: 'ease 1.2s forwards',
    animationName: slideUpSelected,
    animationDelay: '1.8s'
  },
  rightSelected: {
    display: 'flex',
    flexDirection: 'column',
    flex: '1 0 0px',
    // padding: '0 60px 60px 30px',

    // '@media (max-width: 480px)': {
    //   padding: '0',
    // },
    // '@media (max-width: 720px)': {
    //   padding: '0 30px 30px 15px',
    // },
  },
  showRightSelected: {
    opacity: '0',
    animation: 'ease 1.2s forwards',
    animationName: slideUpSelected,
    animationDelay: '2s'
  },
  selectedWorkContainer: {
    position: 'absolute',
    top: '0',
    fontSize: '46px',
    color: '#FFFFFF',
    textAlign: 'left',
    opacity: '0',
    height: '100%',
    width: '100%',
    overflowY: 'scroll',
    zIndex: '2',
  },
  showSelectedWorkContainer: {
    opacity: '0',
    animation: 'ease 1.2s forwards',
    animationName: fadeIn,
    animationDelay: '1.6s'
  },
  flexContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    padding: '0 60px 60px 60px',

    '@media (max-width: 720px)': {
      padding: '0 30px 30px 30px',
    },
    '@media (max-width: 480px)': {
      padding: '0 15px 15px 15px'
    },
    '@media (max-width: 450px)': {
      padding: '0 10px 10px 10px'
    },
  },
  selectedDescription: {
    fontSize: '12px',
    color: 'rgb(184, 184, 184)',

    '@media (max-width: 450px)': {
      fontSize: '10px',
    },
  },
  selectedTitle: {
    fontSize: '46px',
    transition: '1.2s ease all',
    margin: '60px 0 30px 0',
    paddingLeft: '60px',
    opacity: '0',


    '@media (max-width: 720px)': {
      margin: '30px 0',
      paddingLeft: '30px',
    },
    '@media (max-width: 580px)': {
      fontSize: '24px',
    },
    '@media (max-width: 531px)': {
      margin: '15px 0',
    },
    '@media (max-width: 480px)': {
      paddingLeft: '15px',
    },
    '@media (max-width: 400px)': {
      margin: '10px 0',
      fontSize: '18px'
    },
  },
  showSelectedTitle: {
    opacity: '0',
    animation: 'ease 1.2s forwards',
    animationName: fadeInLeft,
    animationDelay: '1.4s'
  },
  selectedImage: {
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    paddingTop: '56.25%'
  },
  externalLink: {
    position: 'relative',
    zIndex: '1',
    color: '#FFFFFF',
    marginTop: '15px',
    fontSize: '12px',

    '@media (max-width: 400px)': {
      fontSize: '10px'
    },
  }
}
