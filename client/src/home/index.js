import React, { Component } from 'react';
import Radium from 'radium';
import { connect } from 'react-redux';

import { getRoute } from '../routes/actions';
import { styles } from './styles';

const imageURL = process.env.PUBLIC_URL + '/Background2.jpg';

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
    const darkenCloud = this.props.navigationState ? styles.darkenCloud : '';

    /*
     * Checks to see if backgroundImage has been loaded.
     * Otherwise show loading state here
    */
    if (!this.state.imageReady) {
      return (
        <div>
          <div style={styles.placeholder}>
            <div style={[styles.loader]}>C</div>
          </div>
          <div style={styles.hiddenHackContainer}>
            <img src={imageURL} alt="bg" onLoad={this.onLoad.bind(this)} />
          </div>
        </div>
      );
    } else {
      return (
        <div style={[styles.landingContainer, slidingIn]}>
          <div style={[styles.headLine, headlineHidden]}>
            <div className="slideDown" style={styles.name}>Christopher Lee</div>
            <div style={styles.strapLine}>Software Developer | Blockchain Enthusiast</div>
          </div>
          <div style={[styles.cloudTwo, darkenCloud]}></div>
          <div style={styles.backgroundImage}></div>
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
