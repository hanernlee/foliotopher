import React, { Component } from 'react';
import Radium from 'radium';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { toggleNavigation } from './actions';
import { styles } from './styles'

class Hamburger extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false,
    }
  }

  handleClick = (e) => {
    if (!this.props.navigationState) {
      this.setState({
        clicked: true
      }, this.sendToNavigation)
    } else {
      this.setState({
        clicked: false
      }, this.sendToNavigation)
    }
  }

  sendToNavigation = () => {
    this.props.toggleNavigation(this.state.clicked);
  }

  render() {
    const clicked = this.props.navigationState;
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

function mapStateToProps(state) {
  return {
    navigationState: state.navigationState
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ toggleNavigation: toggleNavigation}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Radium(Hamburger));
