import React, { Component } from 'react';

class Dots extends Component {
  renderDots() {
    let dotsToRender = [];

    for(let i=0; i < this.props.dotsCount; i++) {
      const selectedDot = this.props.currentCount === i ? styles.selectedDot : styles.dot;

      dotsToRender.push(
        <div style={selectedDot} key={i} onClick={() => this.props.dotClick(i)}>{i}</div>
      );
    }
    return dotsToRender;
  }

  render() {
    return (
      <div>{this.renderDots()}</div>
    );
  }
}

export default Dots;

var styles = {
  dot: {
    color: 'white',
  },
  selectedDot: {
    color: 'red'
  }
}
