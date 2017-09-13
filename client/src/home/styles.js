import Radium from 'radium';

const imageURL = process.env.PUBLIC_URL + '/Background2.jpg';
const cloudTwoURL = process.env.PUBLIC_URL + '/cloud2.png';

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
  landingContainer: {
    height: '100vh',
    position: 'relative',
    transition: 'transform 1s ease',
    overflow: 'hidden',
    transform: 'translateZ(0)',
  },
  backgroundImage: {
    backgroundImage: 'linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(' + imageURL + ')',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    height: '100%',
  },
  cloudTwo: {
    backgroundImage: 'url(' + cloudTwoURL + ')',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    backgroundPosition: 'center center',
    width: '50%',
    height: '50%',
    position: 'absolute',
    top: '10%',
    zIndex: '1',
    opacity: '0',
  },
  headLine: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: '#FFFFFF',
    textAlign: 'center',
    zIndex: '1',
    width: '100%'
  },
  name: {
    fontSize: '40px',
    fontWeight: '600',
    opacity: '0',

    '@media (max-width: 380px)': {
      fontSize: '30px',
    },
  },
  strapLine: {
    opacity: '0',

    '@media (max-width: 380px)': {
      fontSize: '12px',
    },
  },
  slidein: {
    transform: 'translateX(-300px)',
    position: 'relative',
    transition: '1.2s cubic-bezier(0.785, 0.135, 0.15, 0.86) all',
    opacity: '0.5',

    '@media (min-width: 720px)': {
      minHeight: 'calc(100vh - 80px)',
      transform: 'translateX(-400px)',
    }
  },
  stopCloud: {
    display: 'none'
  },
  hiddenHackContainer: {
    display: 'none',
    pointerEvents: 'none'
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
}