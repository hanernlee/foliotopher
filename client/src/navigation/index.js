import React, { Component } from 'react';
import { connect } from 'react-redux';
import Radium from 'radium';
import { bindActionCreators } from 'redux';
import { Link as ReactRouterLink } from 'react-router-dom';

import { toggleNavigation } from '../hamburger/actions';

const Link = Radium(ReactRouterLink);

class NavigationMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      label: 'home'
    };
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
    const linkContainerDisplayTwo = this.props.navigationState ? styles.linkContainerDisplayTwo : '';
    const linkContainerDisplayThree = this.props.navigationState ? styles.linkContainerDisplayThree : '';
    const linkContainerDisplayFour = this.props.navigationState ? styles.linkContainerDisplayFour : '';
    const currentRoute = this.props.currentRoute;

    var highlightedLabel;
    if (currentRoute === '/work') {
      highlightedLabel = 'Work';
    } else if (currentRoute === '/about') {
      highlightedLabel = 'About';
    } else if (currentRoute === '/contact') {
      highlightedLabel = 'Contact';
    } else {
      highlightedLabel = 'Home';
    }


    return this.props.navigationLinks.map((link, index) => {
      return (
        <div style={[styles.linkContainer, index === 0 ? linkContainerDisplay : '', index === 1 ? linkContainerDisplayTwo : '', index === 2 ? linkContainerDisplayThree : '', index === 3 ? linkContainerDisplayFour : '']} key={link.label}>
          <Link to={link.url} style={[styles.link, highlightedLabel === link.label ? styles.highlightLink : '']}>{link.label}</Link>
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
    navigationState: state.navigationState,
    currentRoute: state.currentRoute
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ toggleNavigation: toggleNavigation}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Radium(NavigationMenu));

var fadeInLeft = Radium.keyframes({
  'from': {
    opacity: '0',
    transform: 'translateY(20px)'
  },
  'to': {
    opacity: '1',
    transform: 'translateX(0)'
  }
});

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
    color: '#FFFFFF',
    position: 'absolute',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: '1',
    textAlign: 'center'
  },
  highlightLink: {
    color: '#FFFFFF'
  },
  link: {
    textDecoration: 'none',
    color: '#7F7F7F',
    fontSize: '28px',
    transition: '0.3s ease all',

    ':hover': {
      color: '#FFFFFF'
    }
  },
  linkContainer: {
    margin: '35px auto',
  },
  linkContainerDisplay: {
    opacity: '0',
    animation: 'ease 1.2s forwards',
    animationName: fadeInLeft,
  },
  linkContainerDisplayTwo: {
    opacity: '0',
    animation: 'ease 1.2s forwards',
    animationName: fadeInLeft,
    animationDelay: '0.4s'
  },
  linkContainerDisplayThree: {
    opacity: '0',
    animation: 'ease 1.2s forwards',
    animationName: fadeInLeft,
    animationDelay: '0.8s'
  },
  linkContainerDisplayFour: {
    opacity: '0',
    animation: 'ease 1.2s forwards',
    animationName: fadeInLeft,
    animationDelay: '1.2s'
  }
}
