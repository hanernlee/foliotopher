import React, { Component } from 'react';
import Radium from 'radium';
import { connect } from 'react-redux';

const imageURL = process.env.PUBLIC_URL + '/Background2.jpg';

class App extends Component {

  render() {
    const headlineHidden = this.props.navigationState ? styles.hidden : '';
    const slidingIn = this.props.navigationState ? styles.slidein : '';
    const darkenImage = this.props.navigationState ? styles.darken : '';

    return (
      <div style={[styles.landingContainer, slidingIn]}>
        <div style={[styles.headLine, headlineHidden]}>
          <div style={styles.name}>Christopher Lee</div>
          <div>Software Developer | Blockchain Enthusiast</div>
        </div>
        <div style={[styles.backgroundImage, darkenImage]}></div>
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
    height: '100vh',
    left: '0px',
    position: 'relative',
    transition: 'left 0.4s ease-in-out',
  },
  backgroundImage: {
    backgroundImage: 'linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(' + imageURL + ')',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    height: '100%',
  },
  headLine: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'white',
    textAlign: 'center',
    transition: '0.3s ease all',
    opacity: '1',
  },
  name: {
    fontSize: '40px'
  },
  hidden: {
    opacity: '0',
  },
  slidein: {
    left: '-200px',
    position: 'relative',
    transition: 'left 1.0s cubic-bezier(0.43, 0.17, 0.28, 0.99)',

    '@media (min-width: 720px)': {
      minHeight: 'calc(100vh - 80px)',
      left: '-300px',
    }
  },
  darken: {
    backgroundImage: 'linear-gradient( rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8) ), url(' + imageURL + ')',
  }
}
