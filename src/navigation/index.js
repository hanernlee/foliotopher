import React, { Component } from 'react';
import { connect } from 'react-redux';
import Radium from 'radium';


class NavigationMenu extends Component {
  renderMenu() {
    return this.props.navigationLinks.map((link) => {
      return (
        <div key={link.label}>{link.label}</div>
      );
    });
  }

  render() {
    if (!this.props.navigationState) {
      return (<div></div>);
    }

      return (
      <div>
        {this.renderMenu()}
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
