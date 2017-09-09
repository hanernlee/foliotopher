import React, { Component } from 'react';
import { connect } from 'react-redux';
import Radium from 'radium';
import { bindActionCreators } from 'redux';
import { Link as ReactRouterLink } from 'react-router-dom';

import { toggleNavigation } from '../hamburger/actions';
import { styles } from './styles';

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
