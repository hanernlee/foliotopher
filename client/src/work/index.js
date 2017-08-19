import React, { Component } from 'react';
import Radium from 'radium';
import { connect } from 'react-redux';

import { fetchWorks } from '../firebase/actions';

class Work extends Component {
  componentDidMount() {
    this.props.fetchWorks();
  }

  render() {
    console.log(this.props.worksList);
    const slidingIn = this.props.navigationState ? styles.slidein : '';

    return (
      <div style={[styles.landingContainer, slidingIn]}>
        <div>Work Section</div>
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

export default connect(mapStateToProps, { fetchWorks })(Radium(Work));

var styles = {
  landingContainer: {
    height: '100vh',
    left: '0px',
    position: 'relative',
    transition: 'left 0.4s ease-in-out',
  },
  slidein: {
    left: '-200px',
    position: 'relative',
    transition: 'left 1.0s cubic-bezier(0.43, 0.17, 0.28, 0.99)',

    '@media (min-width: 720px)': {
      minHeight: 'calc(100vh - 80px)',
      left: '-300px',
    }
  }
}
