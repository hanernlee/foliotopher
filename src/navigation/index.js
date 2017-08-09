import React, { Component } from 'react';
import { connect } from 'react-redux';
import Radium from 'radium';


class NavigationMenu extends Component {
  componentWillMount() {
    document.addEventListener('click', this.handleClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClick, false);
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
      <div style={[styles.navigationMenu, navigationDisplay]}>
        <div style={styles.menuContainer}>
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

export default connect(mapStateToProps)(Radium(NavigationMenu));

var styles = {
  navigationMenu: {
    position: 'fixed',
    height: '100vh',
    width: '100vw',
    backgroundColor: 'rgba(0,0,0,0.8)',
    zIndex: '1',
    pointerEvents: 'none',
    opacity: '0',
    transition: '0.3s ease all'
  },
  display: {
    opacity: '1',
    pointerEvents: 'default'
  },
  menuContainer: {
    color: 'white',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  }
}
