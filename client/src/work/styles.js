import Radium from 'radium';

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

var floatUpDown = Radium.keyframes({
  'from': {
    opacity: '0',
    transform: 'translateY(-20px)'
  },
  'to': {
    opacity: '1',
    transform: 'translateY(20px)'
  }
});


export const styles = {
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
    transform: 'translateZ(0)',

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
    top: '30%',
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
    fontWeight: '600',
    color: '#FFFFFF',
    userSelect: 'none',
    transition: '1.2s cubic-bezier(0.785, 0.135, 0.15, 0.86)',
    marginRight: 'auto',

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
    '@media (max-width: 480px)': {
      margin: '15px 0',
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
  },
  placeholder: {
    color: '#FFFFFF',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  loader: {
    fontFamily: "'Great Vibes', cursive",
    fontSize: '60px',
    animation: 'x 1.2s ease infinite alternate',
    animationName: floatUpDown,
  },
}