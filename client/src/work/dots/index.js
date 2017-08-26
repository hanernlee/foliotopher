import React, { Component } from 'react';
import Radium from 'radium';

class Dots extends Component {
  renderDots() {
    let dotsToRender = [];

    for(let i=0; i < this.props.dotsCount; i++) {
      const selectedOrDot = this.props.currentCount === i ? styles.selectedDot : styles.dot;

      dotsToRender.push(
        <div style={selectedOrDot} key={i} onClick={() => this.props.dotClick(i)}>{i}</div>
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

var styles = {
  dotContainer: {
    position: 'absolute',
    right: '0',
    bottom: '-30px'
  },
  dot: {
    color: 'white',
    display: 'inline-block',
    margin: '0 10px'
  },
  selectedDot: {
    color: 'red',
    display: 'inline-block',
    margin: '0 10px'
  }
}
