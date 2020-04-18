import React, {useState} from 'react';
import MapGL, {GeolocateControl } from 'react-map-gl';

const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN;
const MAPBOX_STYLE = process.env.REACT_APP_MAPBOX_STYLE;

const Map = ():JSX.Element => {

  const [viewport, setViewPort ] = useState({
    width: "100%",
    height: 900,
    latitude: 32.072048,
    longitude: 34.898529,
    zoom: 17
  });
  
  return (
    <div style={{ margin: '0 auto'}}>
      <h1 style={{textAlign: 'center', fontSize: '25px', fontWeight: 'bolder' }}>GeoLocator: Click To Find Your Location or click <a href="/search">here</a> to search for a location</h1>
      <MapGL
        {...viewport}
        mapboxApiAccessToken={MAPBOX_TOKEN}
        mapStyle={MAPBOX_STYLE}
        onViewportChange={(viewport:any) => setViewPort({...viewport})}
      >
        {/* <GeolocateControl
          positionOptions={{enableHighAccuracy: true}}
          trackUserLocation={true}
        /> */}
      </MapGL>
    </div>
  )
}

export default Map;
