import React, { Component } from 'react';
import Radium from 'radium';
import { connect } from 'react-redux';
import SwipeableViews from 'react-swipeable-views';
import _ from 'lodash';

import { fetchWorks } from '../firebase/actions';
import { getRoute } from '../routes/actions';
import { styles } from './styles';

import Dots from './dots/index';

class Work extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      workEntries: [],
      selectedWork: null
    }
  }

  componentDidMount() {    
    this.props.fetchWorks();
    this.props.getRoute(this.props.match.url);
  }

  dotClick = (dotIndex) => {
    this.setState({
      count: dotIndex,
      selectedWork: null
    });
  }

  deselectWork() {
    this.setState({
      selectedWork: null
    });
  }

  selectWork(work) {
    this.setState({
      selectedWork: work
    });
  }

  navigateNext = () => {
    const workListLength = this.props.worksList.length - 1;
    const currentCount = this.state.count;
  
    if (currentCount >= 0 && currentCount !== workListLength) {
      this.setState({
        count: currentCount + 1
      });
    } else {
      this.setState({
        count: 0
      });
    }
  }

  onLoad(work) {
    this.setState(({ workEntries }) => {
      return { workEntries: _.sortBy(workEntries.concat(work), ['id']) }
    });
  }

  onChangeIndex(index, indexLatest) {
    this.setState({
      count: index,
      selectedWork: false
    });
  }

  renderInfo() {
    const selectedWork = this.state.selectedWork;

    if (this.props.worksList) {
      return this.state.workEntries.map((work, index) => {
        if (this.state.count === index) {
          return (
            <div key={index} onClick={this.selectWork.bind(this, work)} style={styles.infoContainer}>
              <div style={[styles.infoLine, selectedWork ? styles.hideInfoLine : styles.showInfoLine]}></div>
              <div style={[styles.info, selectedWork ? styles.hideInfo : styles.showInfo]}>Info</div>
            </div>
          );
        }
        return false;
      });
    }
  }

  renderWorkTitle() {
    const selectedWork = this.state.selectedWork;

    if (this.props.worksList) {
      return this.state.workEntries.map((work, index) => {
        if (this.state.count === index) {
          return (
            <div key={work.key} style={styles.worksContainer}>
              <span onClick={this.selectWork.bind(this, work)} key="workTitle" style={[styles.worksTitle, selectedWork ? styles.hideWorksTitle : styles.showWorksTitle]}>{work.title}</span>
              <span onClick={this.selectWork.bind(this, work)} key="workDesc" style={[styles.worksDescription, selectedWork ? styles.hideWorksDescription : styles.showWorksDescription]}>
                - {work.meta}
              </span>
            </div>
          );
        }
        return false;
      });
    }
  }

  renderWorkImage() {
    const selectedWork = this.state.selectedWork;

    if (this.props.worksList) {
      return this.state.workEntries.map((work, index) => {
          return (
            <div onClick={this.navigateNext.bind(this)} key={work.key} style={[styles.worksImage, selectedWork ? styles.hideWorksImage : styles.showWorksImage, {backgroundImage: `linear-gradient( 135deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.9) ), url(${work.image})`}]}></div>
          );
      });
    }
  }

  renderSelectedWork() {
    const work = this.state.selectedWork;

    if (work) {
      return (
        <div onClick={this.deselectWork.bind(this)} style={[styles.selectedWorkContainer, work ? styles.showSelectedWorkContainer : styles.hideSelectedWorkContainer ]}>
          <div style={[styles.selectedTitle, work ? styles.showSelectedTitle : '']}>{work.title}</div>
          <div style={styles.flexContainer}>
            <div style={[styles.leftSelected, work ? styles.showLeftSelected : '']}>
              <div style={[styles.selectedImage, {backgroundImage: `url(${work.image})`}]}></div>
            </div>
            <div style={[styles.rightSelected, work ? styles.showRightSelected : '']}>
              <div style={styles.selectedDescription}>{work.description}</div>
              <a target="_blank" href={work.github} rel="noopener noreferrer external" onClick={(e) => {e.stopPropagation()}} style={[styles.externalLink]}>GitHub</a>
            </div>
          </div>
        </div>
      )
    }
  }

  render() {
    const slidingIn = this.props.navigationState ? styles.slidein : '';
    // const galleryImageLoaded = this.state.workEntries.length ? true : false;

    if (!this.props.worksList) {
      return (
        <div>
          <div style={styles.placeholder}>
            <div style={[styles.loader]}>C</div>
          </div>
        </div>
      );
    }

    return (
      <div style={[styles.landingContainer, slidingIn]}>
        <div style={styles.hiddenHackContainer}>
          {this.props.worksList.map((work, index) =>
            <img src={work.image} alt={work.name} key={index} onLoad={this.onLoad.bind(this, work)} />
          )}
        </div>
        <div style={styles.workGalleryHolder}>
          <div key="gallery" style={styles.workGallery}>
            {this.renderSelectedWork()}
            {this.renderWorkTitle()}
            <div style={styles.aspectRatio}>
              <Dots
                dotsCount={this.props.worksList.length}
                currentCount={this.state.count}
                dotClick={this.dotClick}
              />
            <SwipeableViews index={this.state.count} onChangeIndex={this.onChangeIndex.bind(this)} style={styles.swipeableViews}>
              {this.renderWorkImage()}
            </SwipeableViews>
            </div>
            {this.renderInfo()}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    navigationState: state.navigationState,
    worksList: state.worksList
  };
};

export default connect(mapStateToProps, { fetchWorks, getRoute })(Radium(Work));
