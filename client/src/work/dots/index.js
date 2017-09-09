import React, { Component } from 'react';
import Radium from 'radium';

import { styles } from './styles';

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
