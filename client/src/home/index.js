import React, { Component } from 'react';
import { fadeIn } from 'react-animations';
import Radium from 'radium';
import { connect } from 'react-redux';

const imageURL = process.env.PUBLIC_URL + '/Background2.jpg';
const cloudURL = process.env.PUBLIC_URL + '/cloud3.png';
const cloudTwoURL = process.env.PUBLIC_URL + '/cloud2.png';


class App extends Component {
  render() {
    const headlineHidden = this.props.navigationState ? styles.hidden : '';
    const slidingIn = this.props.navigationState ? styles.slidein : '';
    const darkenImage = this.props.navigationState ? styles.darken : '';
    const darkenCloud = this.props.navigationState ? styles.darkenCloud : '';

    return (
      <div style={[styles.landingContainer, slidingIn]}>
        <div style={[styles.headLine, headlineHidden]}>
          <div style={styles.name}>Christopher Lee</div>
          <div>Software Developer | Blockchain Enthusiast</div>
        </div>
        <div style={[styles.cloudTwo, darkenCloud]}></div>
        <div style={[styles.cloud, darkenCloud]}></div>
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

var movingCloud = Radium.keyframes({
  '0%': {
    transform: 'translateX(-100px)',
    opacity: '0'
  },
  '1%': {
    opacity: '0.4',
  },
  '100%': {
    transform: 'translateX(100vw)',
    opacity: '0.4'
  },
});

var styles = {
  landingContainer: {
    height: '100vh',
    left: '0px',
    position: 'relative',
    transition: 'left 0.6s ease-in-out',
    animation: '2.4s',
    animationName: Radium.keyframes(fadeIn, 'fadeIn'),
    overflow: 'hidden'
  },
  backgroundImage: {
    backgroundImage: 'linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(' + imageURL + ')',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    height: '100%',
  },
  cloud: {
    backgroundImage: 'url(' + cloudURL + ')',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    backgroundPosition: 'center center',
    width: '10%',
    height: '10%',
    position: 'absolute',
    top: '55%',
    zIndex: '1',
    transition: '0.3s ease all',
    animation: 'x 150s linear infinite',
    animationName: movingCloud,
  },
  cloudTwo: {
    backgroundImage: 'url(' + cloudTwoURL + ')',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    backgroundPosition: 'center center',
    width: '50%',
    height: '50%',
    position: 'absolute',
    top: '10%',
    zIndex: '1',
    transition: '0.3s ease all',
    animation: 'x 100s linear infinite',
    animationName: movingCloud,
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
    left: '-300px',
    position: 'relative',
    transition: 'left 1.2s cubic-bezier(0.43, 0.17, 0.28, 0.99)',

    '@media (min-width: 720px)': {
      minHeight: 'calc(100vh - 80px)',
      left: '-400px',
    }
  },
  darken: {
    backgroundImage: 'linear-gradient( rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8) ), url(' + imageURL + ')',
  },
  darkenCloud: {
    backgroundImage: 'none',
  }
}
