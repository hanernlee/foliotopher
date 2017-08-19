import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fadeIn } from 'react-animations';
import Radium from 'radium';
import { bindActionCreators } from 'redux';
import { Link as ReactRouterLink } from 'react-router-dom';

import { toggleNavigation } from '../hamburger/actions';

const Link = Radium(ReactRouterLink);

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
    // if (!this.node.contains(e.target)) {
      this.props.toggleNavigation(false);
    // }
  }

  renderMenu() {
    const linkContainerDisplay = this.props.navigationState ? styles.linkContainerDisplay : '';

    return this.props.navigationLinks.map((link) => {
      return (
        <div style={[styles.linkContainer, linkContainerDisplay]} key={link.label}>
          <Link to={link.url} style={styles.link}>{link.label}</Link>
        </div>
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
    bottom: '0px',
    top: '0px',
    left: '100%',
    width: '300px',
    backgroundColor: '#0C0C0C',
    zIndex: '1',
    transition: '0.6s ease-in-out',

    '@media (min-width: 720px)': {
      width: '400px'
    }
  },
  display: {
    transform: 'translate3d(-300px, 0px, 0px)',

    '@media (min-width: 720px)': {
      transform: 'translate3d(-400px, 0px, 0px)'
    }
  },
  menuContainer: {
    color: 'white',
    position: 'absolute',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: '1',
    textAlign: 'center'
  },
  link: {
    textDecoration: 'none',
    color: 'rgb(184, 184, 184)',
    fontSize: '28px',
    transition: '0.3s ease all',

    ':hover': {
      color: 'white'
    }
  },
  linkContainer: {
    margin: '35px auto',
  },
  linkContainerDisplay: {
    animation: '2.4s',
    animationName: Radium.keyframes(fadeIn, 'fadeIn')
  }
}
