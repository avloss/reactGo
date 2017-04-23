// petty much copy-paste from here
// https://github.com/istarkov/google-map-react-examples/tree/dbfc2fcd381cc39da315875f5a45d4ebee765f26/web/flux/components/examples/x_simple


/*
 * Base Google Map example
 */
import React, {PropTypes, Component} from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';
import GoogleMap from 'google-map-react';

import MasseuseModal from './MasseuseModal';

const K_WIDTH = 40;
const K_HEIGHT = 40;

const greatPlaceStyle = {
  // initially any map object has left top corner at lat lng coordinates
  // it's on you to set object origin to 0,0 coordinates
  position: 'absolute',
  //width: K_WIDTH*2.5,
  height: K_HEIGHT * 0.7,
  left: -K_WIDTH / 2,
  top: -K_HEIGHT / 2,

  border: '2px dotted #1eb508',
  borderRadius: K_HEIGHT,
  backgroundColor: 'white',
  textAlign: 'center',
  color: '#545454',
  fontSize: 16,
  fontWeight: 'bold',
  paddingLeft: 3,
  paddingRight: 3
};

class MyGreatPlace extends Component {

  //shouldComponentUpdate = shouldPureComponentUpdate;

  render() {
    return (
      <div style={greatPlaceStyle} onClick={this.props.onClickFunc}>
        {this.props.text}
        <div style={{color: 'red', fontSize: 25}}> {"*".repeat(this.props.stars)}</div>
      </div>
    );
  }
}


export default class SimpleMapComponent extends Component {
  static propTypes = {
    center: PropTypes.array,
    zoom: PropTypes.number
  };

  static defaultProps = {
    center: [13.7381564, 100.560296],
    zoom: 14
  };

  shouldComponentUpdate = shouldPureComponentUpdate;

  constructor(props) {
    super(props);
  }

  render() {
    const {masseuses, openMasseuseModal} = this.props;
    //const XX = (x)=>console.log(x)
    return (
      <div style={{height: '500px'}}>
        <GoogleMap
          apiKey="AIzaSyAalkUAgB273NvUfsSKPpG4Wr47Q1YQNFg"//{YOUR_GOOGLE_MAP_API_KEY} // set if you need stats etc ...
          center={this.props.center}
          zoom={this.props.zoom}>


          {
            masseuses.map(
            (m) => <MyGreatPlace lat={m.lat} lng={m.lon} text={m.name.split(/(\s+)/)[0]} key={m._id} stars={m.stars}
            onClickFunc = {()=>openMasseuseModal(m)}/>
          )}


        </GoogleMap>
        <MasseuseModal />
      </div>
    );
  }
}