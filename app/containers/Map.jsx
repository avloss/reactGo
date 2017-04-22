import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import SimpleMapComponent from "../components/Map";

/*
 * Note: This is kept as a container-level component,
 *  i.e. We should keep this as the container that does the data-fetching
 *  and dispatching of actions if you decide to have any sub-components.
 */

class Map extends Component {

  render(){
    const {masseuses}  = this.props;
    return <SimpleMapComponent masseuses={masseuses}/>
  }
}



// class Vote extends Component {
//   render() {
//     const {newTopic, topics, typing, createTopic, destroyTopic, incrementCount, decrementCount } = this.props;
//     return (
//       <div className={cx('vote')}>
//         <EntryBox
//           topic={newTopic}
//           onEntryChange={typing}
//           onEntrySave={createTopic} />
//         <MainSection
//           topics={topics}
//           onIncrement={incrementCount}
//           onDecrement={decrementCount}
//           onDestroy={destroyTopic} />
//         <Scoreboard topics={topics} />
//       </div>
//     );
//   }
// }

Map.propTypes = {
  masseuses: PropTypes.array.isRequired,
};

function mapStateToProps(state) {
  return {
    masseuses: state.masseuse.masseuses,
  };
}

export default connect(mapStateToProps)(Map);