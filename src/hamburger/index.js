import React, { Component } from 'react';
import Radium from 'radium';

class Hamburger extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false,
    }
  }

  handleClick = () => {
    const clicked = this.state.clicked;
    if (clicked) {
      this.setState({clicked: false});
    } else {
      this.setState({clicked:true});
    }
  }

  render() {
    const clicked = this.state.clicked;
    var closedStyles = '';

    if (clicked) {
      closedStyles = {
        burgerTopClose: styles.burgerTopClose,
        burgerMiddleClose: styles.burgerMiddleClose,
        burgerBottomClose: styles.burgerBottomClose
      }
    }

    return (
      <div key="hamburger" style={styles.base} onClick={this.handleClick}>
        <div style={styles.burgerBun}>
          {Radium.getState(this.state, 'hamburger', ':hover') && !clicked ? (<div style={[styles.burger, styles.burgerTopHover, closedStyles.burgerTopClose]}></div>) : <div style={[styles.burger, styles.burgerTop, closedStyles.burgerTopClose]}></div>}

          <div style={[styles.burger, styles.burgerMiddle, closedStyles.burgerMiddleClose]}></div>

          {Radium.getState(this.state, 'hamburger', ':hover') && !clicked ? (<div style={[styles.burger, styles.burgerBottomHover, closedStyles.burgerBottomClose]}></div>) : <div style={[styles.burger, styles.burgerBottom, closedStyles.burgerBottomClose]}></div>}
        </div>
      </div>
    );
  }
}

var styles = {
  base: {
    backgroundColor: 'transparent',
    borderRadius: '50%',
    boxShadow: '3px 3px 15px rgba(0,0,0,0.5)',
    padding: '16px',
    position: 'fixed',
    right: '15px',
    top: '15px',
    zIndex: '1',

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
    transition: 'all 0.3s ease',
    width: '24px'
  },
  burgerTop: {
    top: '0px'
  },
  burgerTopHover: {
    top: '3px'
  },
  burgerTopClose: {
    top: '3px',
    transform: 'translateY(7px) rotate(-45deg)'
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

export default Radium(Hamburger);
