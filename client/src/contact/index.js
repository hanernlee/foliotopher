import React, { Component } from 'react';
import Radium from 'radium';
import { connect } from 'react-redux';

import { getRoute } from '../routes/actions';
import { styles } from './styles'

const imageURL = process.env.PUBLIC_URL + '/contact.jpg';
const profileURL = process.env.PUBLIC_URL + '/round.jpg';

class Contact extends Component {
  constructor(props) {
      super(props)

      this.state = {
        height: 0,
        width: 0,
        imageReady: false,
        profileImageReady: false
      }
  }
  componentDidMount() {    
    this.props.getRoute(this.props.match.url);

    const width = document.getElementById('rotateContainer').clientWidth ? document.getElementById('rotateContainer').clientWidth : 200;
    const height = document.getElementById('rotateContainer').clientHeight ? document.getElementById('rotateContainer').clientHeight : 200;

    this.setState({
      height: height,
      width: width
    });
  }

  onLoad(work) {
    this.setState({
      imageReady: true
    });
  }

  onProfileImageLoad(work) {
    this.setState({
      profileImageReady: true
    });
  }

  renderIcons() {
    if (this.props.contactLinks) {
      const radius = 70;
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
          <div className="rotateIcon" key={index} style={[styles.icon, iconStyle, Radium.getState(this.state, 'rotateContainer', ':hover') && styles.pauseRotate
          ]}>
          <a target="_blank" href={link.social} style={styles.socialLinks}>
            <i className={`fa fa-3x ${link.icon}`}></i>
          </a>
          </div>
        );
      });
    }
  }

  render() {
    const slidingIn = this.props.navigationState ? styles.slidein : '';


    if (!this.state.imageReady && !this.state.profileImageReady) {
      return (
        <div>
          <div style={styles.placeholder}>
            <div style={[styles.loader]}>C</div>
          </div>
          <div id="rotateContainer" style={styles.hackRotateContainer}></div>
          <div style={styles.hiddenHackContainer}>
            <img src={imageURL} alt="bg" onLoad={this.onLoad.bind(this)} />
            <img src={profileURL} alt="bg" onLoad={this.onProfileImageLoad.bind(this)} />
          </div>
        </div>
      )
    } else {
      return (
        <div className="fullheight" style={[styles.landingContainer, slidingIn]}>
          <div style={[styles.contactSection, styles.backgroundImage]}>
            <div style={styles.infoContainer}>
              <div style={styles.infoDescription}>
                <div className="showContact" style={styles.infoTitle}>
                  <div style={styles.profileImage}></div>
                </div>
                <div className="showContact showParaTwo" style={styles.infoPara}>
                  Hello! I am a <span style={styles.bold}>Melbourne based Software Developer</span> and I enjoy building <span style={styles.bold}>responsive mobile and web applications.</span>
                </div>
                <div className="showContact showParaThree" style={styles.infoPara}>My current interests include developing in <span style={styles.bold}>React</span>, <span style={styles.bold}>React Native</span>, <span style={styles.bold}>iOS (Swift) Programming</span> and exploring <span style={styles.bold}>Blockchain</span> technology.</div>
                <div className="showContact showParaFour" style={styles.infoPara}>New experiences and challenges are things I constantly look forward to. <a href="mailto:hanernlee@gmail.com" style={[styles.bold, styles.email]}>Feel free to get in touch!</a></div>
              </div>
              <div id="rotateContainer" style={styles.hackRotateContain}></div>
              <div className="showContact showSpinner" style={styles.rotateWrapper}>
                {!this.props.navigationState && <div className="rotateContainer" key="rotateContainer" style={styles.rotateContainer}>
                  {this.renderIcons()}
                </div>}
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
}

function mapStateToProps(state) {
  return {
    navigationState: state.navigationState,
    contactLinks: state.contactLinks
  };
};

export default connect(mapStateToProps, { getRoute })(Radium(Contact));
