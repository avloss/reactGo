import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import SimpleMapComponent from "../components/Map";
import { openMasseuseModal } from '../actions/masseuseModal';
/*
 * Note: This is kept as a container-level component,
 *  i.e. We should keep this as the container that does the data-fetching
 *  and dispatching of actions if you decide to have any sub-components.
 */

class Map extends Component {

  render(){
    const {masseuses, openMasseuseModal}  = this.props;
    return <SimpleMapComponent masseuses={masseuses} openMasseuseModal={openMasseuseModal}/>
  }
}


Map.propTypes = {
  masseuses: PropTypes.array.isRequired,
};

function mapStateToProps(state) {
  return {
    masseuses: state.masseuse.masseuses,
  };
}

export default connect(mapStateToProps, {openMasseuseModal})(Map);