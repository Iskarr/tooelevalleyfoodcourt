import React, {Component, props} from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%',
};

export class EmbedMap extends Component {
  constructor(props) {
    super(props);
  }

  render() {
        return (
            <Map
                google={this.props.google}
                zoom={8}
                style={mapStyles}
                initialCenter={{ lat: this.props.lat, lng: this.props.long }}
            />
        );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyA1FItXTdaXGNYmvgcUzIXzb7hStkL8c7U'
})(EmbedMap);