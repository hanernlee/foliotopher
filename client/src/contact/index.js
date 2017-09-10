import React, { Component } from 'react';
import Radium from 'radium';
import { connect } from 'react-redux';

import { getRoute } from '../routes/actions';
import { styles } from './styles'

const imageURL = process.env.PUBLIC_URL + '/contact.jpg';

class Contact extends Component {
  constructor(props) {
      super(props)

      this.state = {
        height: 0,
        width: 0
      }
  }
  componentDidMount() {    
    this.props.getRoute(this.props.match.url);

    const width = document.getElementById('rotateContainer').clientWidth;
    const height = document.getElementById('rotateContainer').clientHeight;

    this.setState({
      height: height,
      width: width
    })
  }

  renderIcons() {
    if (this.props.contactLinks) {
      const radius = 85;
      const links = this.props.contactLinks;
      const containerHeight = this.state.height;
      const containerWidth = this.state.width;
      var angle = 0, step = (2 * Math.PI) / links.length;

      return links.map((link, index) => {
        var x = Math.round(containerWidth / 2 + radius * Math.cos(angle) - 30 / 2);
        var y = Math.round(containerHeight / 2 + radius * Math.sin(angle) - 30 / 2);

        angle += step;
  
        var iconStyle = {
          left: x + 'px',
          top: y + 'px'
        };

        return (
          <div key={index} style={[styles.icon, iconStyle, Radium.getState(this.state, 'rotateContainer', ':hover') && styles.pauseRotate
          ]}>
            <i className={`fa fa-3x ${link.icon}`}></i>
          </div>
        );
      });
    }
  }

  render() {
    const slidingIn = this.props.navigationState ? styles.slidein : '';

    return (
      <div style={[styles.landingContainer, slidingIn]}>
        <div style={styles.contactSection}>
          <div style={styles.imageContainer}>
            <div style={styles.backgroundImage}></div>
          </div>
          <div style={styles.infoContainer}>
            <div style={styles.infoTitle}>Say hello!</div>
              <div key="rotateContainer" id="rotateContainer" style={styles.rotateContainer}>
                {this.renderIcons()}
              </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    navigationState: state.navigationState,
    contactLinks: state.contactLinks
  };
};

export default connect(mapStateToProps, { getRoute })(Radium(Contact));