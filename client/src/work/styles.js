import Radium from 'radium';

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
  info: {
    position: 'relative',
    top: '10px',
    fontSize: '12px',
    opacity: '0',

    ':hover': {}
  },
  landingContainer: {
    position: 'relative',
    transition: 'transform 1s ease',
    overflow: 'hidden',
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
    transition: '1.2s cubic-bezier(0.785, 0.135, 0.15, 0.86) all',
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
    opacity: '0',

    ':hover': {
      cursor: 'pointer',
    },

    '@media (max-width: 1024px)': {
      fontSize: '40px'
    },
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
  leftSelected: {
    display: 'flex',
    flexDirection: 'column',
    flex: '1 0 0px',
    paddingRight: '30px',

    '@media (max-width: 480px)': {
      paddingRight: '15px',
    },
  },
  rightSelected: {
    display: 'flex',
    flexDirection: 'column',
    flex: '1 0 0px',
  },
  selectedWorkContainer: {
    position: 'absolute',
    top: '0',
    fontSize: '46px',
    color: '#FFFFFF',
    textAlign: 'left',
    height: '100%',
    width: '100%',
    zIndex: '2',
    display: 'flex'
  },
  flexContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    padding: '0 60px',

    '@media (max-width: 720px)': {
      padding: '0 30px',
    },
    '@media (max-width: 480px)': {
      padding: '0 15px'
    },
    '@media (max-width: 450px)': {
      padding: '0 10px'
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
    textAlign: 'center',
    opacity: '0',
    flex: '1 0 100%',

    '@media (max-width: 580px)': {
      fontSize: '24px',
    },
    '@media (max-width: 400px)': {
      margin: '10px 0',
      fontSize: '18px'
    },
  },
  selectedImage: {
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    paddingTop: '56.25%',
    transition: '0.4s ease all',
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
    width: '100%',
    textAlign: 'center'
  },
  loader: {
    fontFamily: "'Great Vibes', cursive",
    fontSize: '60px',
    animation: 'x 1.2s ease infinite alternate',
    animationName: floatUpDown,
  },
  backIcon: {
    flex: '1 0 100%',
    textAlign: 'center',

    ':hover': {
      cursor: 'pointer'
    },

    '@media (max-width: 580px)': {
      fontSize: '24px',
    },
  }
}