import Radium from 'radium';

var grow = Radium.keyframes({
  'from': {
    opacity: '0',
    transform: 'scaleX(0)'
  },
  'to': {
    opacity: '1',
    transform: 'scaleX(1)'
  }
});

export const styles = {
  base: {
    backgroundColor: 'transparent',
    padding: '16px',
    position: 'fixed',
    right: '15px',
    top: '15px',
    zIndex: '2',
    cursor: 'pointer',
    opacity: '0',
    transformOrigin: 'left',
    animation: 'ease 1.2s forwards',
    animationName: grow,
    animationDelay: '0.8s',

    // Need to add empty :hover styles here to tell Radium to track this element's
    // state.
    ':hover': {},

    '@media (min-width: 720px)': {
      right: '40px',
      top: '25px'
    }
  },
  burgerBun: {
    height: '22px',
    position: 'relative',
    width: '24px',
  },
  burger: {
    backgroundColor: 'rgb(184, 184, 184)',
    height: '2px',
    left: '0px',
    position: 'absolute',
    width: '24px',
    transition: '0.4s ease all',
  },
  burgerTop: {
    top: '0px'
  },
  burgerTopHover: {
    top: '3px'
  },
  burgerTopClose: {
    top: '3px',
    transform: 'translateY(7px) rotate(-45deg)',
  },
  burgerMiddle: {
    top: '10px'
  },
  burgerMiddleClose: {
    transform: 'rotate(45deg)'
  },
  burgerBottom: {
    top: '20px'
  },
  burgerBottomHover: {
    top: '17px'
  },
  burgerBottomClose: {
    opacity: 0
  }
}
