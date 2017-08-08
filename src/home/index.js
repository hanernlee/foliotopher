import React, { Component } from 'react';
import Radium from 'radium';
import { connect } from 'react-redux';

const imageURL = process.env.PUBLIC_URL + '/Background2.jpg';

class App extends Component {
  render() {
    return (
      <div style={styles.landingContainer}>
        {!this.props.navigationState && <div style={styles.headLine}>
          <div style={styles.name}>Christopher Lee</div>
          <div>Software Developer</div>
        </div>}
        <div style={styles.backgroundImage}></div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    navigationState: state.navigationState
  };
};

export default connect(mapStateToProps)(Radium(App));

var styles = {
  landingContainer: {
    height: '100vh'
  },
  backgroundImage: {
    backgroundImage: 'linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(' + imageURL + ')',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    height: '100%'
  },
  headLine: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'white',
    textAlign: 'center'
  },
  name: {
    fontSize: '40px'
  }
}
