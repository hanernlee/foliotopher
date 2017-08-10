import React, { Component } from 'react';
import { connect } from 'react-redux';
import Radium from 'radium';
import { bindActionCreators } from 'redux';

import { toggleNavigation } from '../hamburger/actionTypes';

class NavigationMenu extends Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }

  handleClick() {
    // attach/remove event handler
    if (this.props.navigationState) {
      document.addEventListener('click', this.handleOutsideClick, false);
    } else {
      document.removeEventListener('click', this.handleOutsideClick, false);
    }
  }

  handleOutsideClick(e) {
    // Detect click outside the ref component
    if (!this.node.contains(e.target)) {
      this.props.toggleNavigation(false);
    }
  }

  renderMenu() {
    return this.props.navigationLinks.map((link) => {
      return (
        <div key={link.label}>{link.label}</div>
      );
    });
  }

  render() {
    const navigationDisplay = this.props.navigationState ? styles.display : '';

    return (
      <div onClick={this.handleClick()} style={[styles.navigationMenu, navigationDisplay]}>
        <div ref={node => { this.node = node; }} style={styles.menuContainer}>
          {this.renderMenu()}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    navigationLinks: state.navigationLinks,
    navigationState: state.navigationState
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ toggleNavigation: toggleNavigation}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Radium(NavigationMenu));

var styles = {
  navigationMenu: {
    position: 'fixed',
    height: '100vh',
    width: '100vw',
    backgroundColor: 'rgba(0,0,0,0.8)',
    zIndex: '1',
    opacity: '0',
    transition: '0.3s ease all'
  },
  display: {
    opacity: '1',
  },
  menuContainer: {
    color: 'white',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: '1'
  }
}
