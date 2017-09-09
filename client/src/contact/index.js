import React, { Component } from 'react';
import Radium from 'radium';
import { connect } from 'react-redux';

import { getRoute } from '../routes/actions';
import { styles } from './styles'

const imageURL = process.env.PUBLIC_URL + '/contact.jpg';

class Contact extends Component {
  componentDidMount() {    
    this.props.getRoute(this.props.match.url);
  }

  render() {
    const slidingIn = this.props.navigationState ? styles.slidein : '';

    return (
      <div style={[styles.landingContainer, slidingIn]}>
        <div style={styles.contactSection}>
          Say hello!
          <div style={styles.backgroundImage}></div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    navigationState: state.navigationState,
  };
};

export default connect(mapStateToProps, { getRoute })(Radium(Contact));