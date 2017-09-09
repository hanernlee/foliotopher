import Radium from 'radium';

var slideIn = Radium.keyframes({
  'from': {
    opacity: '0',
    transform: 'translateX(-15px)'
  },
  'to': {
    opacity: '1',
    transform: 'translateX(0)'
  }
});

export const styles = {
  dotContainer: {
    position: 'absolute',
    right: '0',
    bottom: '-30px',
    opacity: '0',
    animation: 'ease 1.2s forwards',
    animationName: slideIn,
    animationDelay: '1.2s'
  },
  dot: {
    backgroundColor: '#FFFFFF',
    display: 'inline-block',
    width: '3px',
    height: '10px',
    marginLeft: '10px',
    cursor: 'pointer',
    opacity: '0.2'
  },
  selectedDot: {
    opacity: '0.8',
  }
}
