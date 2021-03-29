import * as React from 'react';
import { useState } from 'react';
import {Component} from 'react';
import MapGL from 'react-map-gl';
const MAPBOX_ACCESS_TOKEN = "pk.eyJ1IjoibWlvaXNtaW8iLCJhIjoiY2ttdXltdzdvMDAwbTJwczFyNXdtaHdnbiJ9.eme1iIb7IA-eHvcXBFWOkQ";

class Map extends Component {
    constructor(props) {
      super(props);
      this.state = {
        viewport: {
          latitude: 37.8,
          longitude: -122.4,
          zoom: 14,
          bearing: 0,
          pitch: 0
        }
      };
    }
  
    render() {
      return (
        <MapGL
          {...this.state.viewport}
          width="200px"
          height="200px"
          mapStyle="mapbox://styles/mapbox/dark-v9"
          onViewportChange={viewport => this.setState({viewport})}
          mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN}
        />
      );
    }
  }

  export default Map;