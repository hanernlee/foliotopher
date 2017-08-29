import React, { Component } from 'react';
import Radium from 'radium';
import { connect } from 'react-redux';
import { fadeIn } from 'react-animations';

import { getRoute } from '../routes/actions';

const imageURL = process.env.PUBLIC_URL + '/Background2.jpg';
const cloudTwoURL = process.env.PUBLIC_URL + '/cloud2.png';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imageReady: false,
    }
  }

  componentDidMount() {
    this.props.getRoute(this.props.match.url);
  }

  onLoad(work) {
    this.setState({
      imageReady: true
    });
  }

  render() {
    const headlineHidden = this.props.navigationState ? styles.hidden : '';
    const slidingIn = this.props.navigationState ? styles.slidein : '';
    const darkenImage = this.props.navigationState ? styles.darken : '';
    const darkenCloud = this.props.navigationState ? styles.darkenCloud : '';

    /*
     * Checks to see if backgroundImage has been loaded.
     * Otherwise show loading state here
    */
    if (!this.state.imageReady) {
      return (
        <div>
          <div style={styles.hiddenHackContainer}>
            <img src={imageURL} alt="bg" onLoad={this.onLoad.bind(this)} />
          </div>
        </div>
      );
    } else {
      return (
        <div style={[styles.landingContainer, slidingIn]}>
          <div style={[styles.headLine, headlineHidden]}>
            <div style={styles.name}>Christopher Lee</div>
            <div style={styles.strapLine}>Software Developer | Blockchain Enthusiast</div>
          </div>
          <div style={[styles.cloudTwo, darkenCloud]}></div>
          <div style={[styles.backgroundImage, darkenImage]}></div>
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    navigationState: state.navigationState
  };
};

export default connect(mapStateToProps, { getRoute })(Radium(App));

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

var fadeInDropdown = Radium.keyframes({
  'from': {
    opacity: '0',
    transform: 'translateY(-15px)'
  },
  'to': {
    opacity: '1',
    transform: 'translateY(0)'
  }
});

var styles = {
  landingContainer: {
    height: '100vh',
    position: 'relative',
    transition: 'transform 1s ease',
    overflow: 'hidden',
  },
  backgroundImage: {
    backgroundImage: 'linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(' + imageURL + ')',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    height: '100%',
    opacity: '0',
    animation: 'x 2.4s linear forwards',
    animationName: Radium.keyframes(fadeIn, 'fadeIn')
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
    opacity: '0',
    transition: '0.3s ease all',
    animation: 'x 80s linear infinite',
    animationName: movingCloud,
  },
  headLine: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: '#FFFFFF',
    textAlign: 'center',
    zIndex: '1',
  },
  name: {
    fontSize: '40px',
    opacity: '0',
    animation: 'x 0.8s linear forwards',
    animationName: fadeInDropdown,
  },
  strapLine: {
    opacity: '0',
    animation: 'x 0.8s linear forwards',
    animationName: fadeInDropdown,
    animationDelay: '0.8s'
  },
  hidden: {
    opacity: '0',
    pointerEvents: 'none'
  },
  slidein: {
    transform: 'translateX(-300px)',
    position: 'relative',
    transition: 'transform 0.8s ease',

    '@media (min-width: 720px)': {
      minHeight: 'calc(100vh - 80px)',
      transform: 'translateX(-400px)',
    }
  },
  darken: {
    backgroundImage: 'linear-gradient( rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8) ), url(' + imageURL + ')',
  },
  darkenCloud: {
    backgroundImage: 'none',
  },
  hiddenHackContainer: {
    display: 'none',
    pointerEvents: 'none'
  }
}
