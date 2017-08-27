import React, { Component } from 'react';
import Radium from 'radium';

class Dots extends Component {
  renderDots() {
    let dotsToRender = [];

    for(let i=0; i < this.props.dotsCount; i++) {
      const selectedOrDot = this.props.currentCount === i ? styles.selectedDot : '';

      dotsToRender.push(
        <div style={[styles.dot, selectedOrDot]} key={i} onClick={() => this.props.dotClick(i)}></div>
      );
    }
    return dotsToRender;
  }

  render() {
    return (
      <div style={styles.dotContainer}>
        {this.renderDots()}
      </div>
    );
  }
}

export default Radium(Dots);

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

var styles = {
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
    backgroundColor: 'white',
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
