import React, { Component } from 'react';
import Radium from 'radium';
import { connect } from 'react-redux';
import SwipeableViews from 'react-swipeable-views';

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
      return { workEntries: workEntries.concat(work) }
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
    const loadedWorkEntries = this.state.workEntries;
    const worksList = this.props.worksList;

    if (worksList && worksList.length === loadedWorkEntries.length) {
      return worksList.map((work, index) => {
        if (this.state.count === index) {

          return (
            <div key={index} onClick={this.selectWork.bind(this, work)} style={styles.infoContainer}>
              <div className={selectedWork ? 'hideInfoLine' : 'showInfoLine'} style={styles.infoLine}></div>
              <div className={selectedWork ? 'hideInfo' : 'showInfo'} style={styles.info}>Info</div>
            </div>
          );
        }
        return false;
      });
    }
  }

  renderWorkTitle() {
    const selectedWork = this.state.selectedWork;
    const loadedWorkEntries = this.state.workEntries;
    const worksList = this.props.worksList;

    if (worksList && worksList.length === loadedWorkEntries.length) {
      return worksList.map((work, index) => {
        if (this.state.count === index) {
          return (
            <div key={work.key} style={styles.worksContainer}>
              <span className={selectedWork ? 'hideWorkTitle' : 'slideInWorkTitle'} onClick={this.selectWork.bind(this, work)} key="workTitle" style={styles.worksTitle}>{work.title}</span>
              <span className={selectedWork ? 'hideWorkDescription' : 'showWorkDescription'} onClick={this.selectWork.bind(this, work)} key="workDesc" style={styles.worksDescription}>
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
    const loadedWorkEntries = this.state.workEntries;
    const worksList = this.props.worksList;

    if (worksList && worksList.length === loadedWorkEntries.length) {
      return worksList.map((work, index) => {
          return (
            <div className={selectedWork ? 'hideWorkImage' : 'showWorkImage'} onClick={this.navigateNext.bind(this)} key={work.key} style={[styles.worksImage, {backgroundImage: `linear-gradient( 135deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.9) ), url(${work.image})`}]}></div>
          );
      });
    } else {
      // To prevent React Swipeable error
      return (<div></div>);
    }
  }

  renderSelectedWork() {
    const work = this.state.selectedWork;

    if (work) {
      return (
        <div className="showSelectedWork" style={styles.selectedWorkContainer}>
          <div style={styles.flexContainer}>
            <div className="showSelectedTitle" style={styles.selectedTitle}>{work.title}</div>
            <div className="showLeftSelected" style={styles.leftSelected}>
              <div style={[styles.selectedImage, {backgroundImage: `url(${work.image})`}]}></div>
            </div>
            <div className="showRightSelected" style={styles.rightSelected}>
              <div style={styles.selectedDescription}>{work.description}</div>
              <div>
                <a target="_blank" href={work.github} rel="noopener noreferrer external" onClick={(e) => {e.stopPropagation()}} style={[styles.externalLink]}>GitHub</a>
                {work.demo && <a target="_blank" href={work.demo} rel="noopener noreferrer external" onClick={(e) => {e.stopPropagation()}} style={[styles.externalLink]}>View</a>}
              </div>
            </div>
            <i onClick={this.deselectWork.bind(this)} style={styles.backIcon} key="back-icon" className="fa fa-angle-down"></i>
          </div>
        </div>
      )
    }
  }

  render() {
    const slidingIn = this.props.navigationState ? styles.slidein : '';
    const worksList = this.props.worksList;
    const loadedWorkEntries = this.state.workEntries;

    if (!worksList) {
      return (<div></div>);
    } else {
      if (worksList && worksList.length === loadedWorkEntries.length) {
        return (
          <div className="fullheight workContainer" style={[styles.landingContainer, slidingIn]}>
            <div style={styles.workGalleryHolder}>
              <div className="slideUpGallery" key="gallery" style={styles.workGallery}>
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
      } else {
        return (
          <div>
            <div style={styles.placeholder}>
              <div style={[styles.loader]}>C</div>
            </div>
            <div style={styles.hiddenHackContainer}>
              {this.props.worksList.map((work, index) =>
                <img src={work.image} alt={work.name} key={index} onLoad={this.onLoad.bind(this, work)} />
              )}
            </div>
          </div>
        );
      }
    }
  }
}

function mapStateToProps(state) {
  return {
    navigationState: state.navigationState,
    worksList: state.worksList
  };
};

export default connect(mapStateToProps, { fetchWorks, getRoute })(Radium(Work));
