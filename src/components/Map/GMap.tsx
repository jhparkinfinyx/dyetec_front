import React, { useState } from 'react';
import { observer } from "mobx-react";
import GoogleMapReact from 'google-map-react';

import FilterList from '../FilterList';

import Marker from './Marker2';
import SpeechBubble from './SpeechBubble';

import useWindowDimensions from 'window-dimensions';

import useStore from 'stores/useStore';

// import {MAP_GOOGLE_KEY} from '../../config';


/*
  heatmap data format
  {    
    positions: [
      {lat: 55.5, lng: 34.56},
      {lat: 34.7, lng: 28.4},
      ...
    ],
    options: {   
      radius: 20,   
      opacity: 0.6,
      ...
  }

*/

const GMap = observer(({}) => {
  const {height, width } = useWindowDimensions();
  const [center, setCenter] = useState({lat: 128.583052, lng: 35.798838 });
  const [zoom, setZoom] = useState(11);
  const [heatmapFlag, setHeatmapFlag] = useState(true);

  const { oldDataStore } = useStore();

  const defaultProps = {
    center: {
      lat: 35.84, // 10.99835602,
      lng: 128.583052 // 77.01502627
    },
    zoom: 12
  };
  // const heatmapPoints = [
  //   { lat: 35.873096205716664, lng: 128.62496190056115 },
  //   { lat: 35.873096205716664, lng: 128.62496190056115 },
  //   { lat: 35.873096205716664, lng: 128.62496190056115 },
  //   { lat: 35.873096205716664, lng: 128.62496190056115 },
  //   { lat: 35.873096205716664, lng: 128.62496190056115 },
  //   { lat: 35.873096205716664, lng: 128.62496190056115 },
  //   { lat: 35.84467761472428, lng: 128.595716371725 },
  //   { lat: 35.84467761472428, lng: 128.595716371725 },
  //   { lat: 35.84467761472428, lng: 128.595716371725 },
  // ]
  const heatMapData = {
    positions: oldDataStore.getCurrentData[0] != null ? oldDataStore.getCurrentData : [],
    options: {
      radius: 20,
      opacity: 0.6
    }
  }

  // const markers = [
  //   {id: 1, lat: 35.84467761472428, lng: 128.595716371725},
  //   {id: 2, lat: 35.87344589176068, lng: 128.60242896525773}
  // ]

  const getMapOptions = (maps: any) => {
    return {
      disableDefaultUI: true,
      mapTypeControl: true,
      streetViewControl: true,
      styles: [{ featureType: 'poi', elementType: 'labels', stylers: [{ visibility: 'on' }] }],
    };
  };

  // const {rowFrom, rowTo} = getRealFromTo(this.props.visibleRowFirst, this.props.visibleRowLast, this.props.maxVisibleRows, this.props.markers.size);

  const isHiddenMarker = oldDataStore.getMarkerFlag;
  // alert(JSON.stringify(oldDataStore.getCurrentData));
  const Markers = oldDataStore.getCurrentData &&
  oldDataStore.getCurrentData[0] != null &&
    // markers.filter((m, index) => index >= rowFrom && index <= rowTo)
    oldDataStore.getCurrentData
      .map((place, index) => (
        <Marker
          // required props
          key={place.id}
          place={place}
          lat={place.lat}
          lng={place.lng}
          // name="My New Marker"
          color="rgba(0, 0, 0, 0.0)"
          isHidden={isHiddenMarker}

          // any user props
          // showBallon={index + rowFrom === this.props.openBallonIndex}
          // onCloseClick={this._onBalloonCloseClick}
          // hoveredAtTable={index + rowFrom === this.props.hoveredRowIndex}
          // scale={getScale(index + rowFrom, this.props.visibleRowFirst, this.props.visibleRowLast, K_SCALE_NORMAL)}
          // {...markerDescriptions[marker.get('type')]}
          // marker={marker} 
        />
      ));
  
      function handleZoomChanged(){
        console.log(this.getZoom()) //this refers to Google Map instance
      }
      
  return (
    <div>
      <FilterList />
    
      <div style={{ height: '90vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        heatmapLibrary={heatmapFlag}
        heatmap={heatMapData}
        options={getMapOptions}
        // onZoomChanged={handleZoomChanged}
      >
        
        {/* <Marker
          lat={35.87344589176068}
          lng={128.60242896525773}
          name="My New Marker"
          color="blue"
        /> */}

        {isHiddenMarker ? Markers : null}
        {/* <SpeechBubble 
          lat={35.84467761472428} 
          lng={128.595716371725}
        /> */}
      </GoogleMapReact>
    </div>
  </div>
	)
});

export default GMap;




