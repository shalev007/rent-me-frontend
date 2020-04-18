import React, {useState} from 'react';
import MapGL, {GeolocateControl, Marker} from 'react-map-gl';

const {
    REACT_APP_MAPBOX_TOKEN: MAPBOX_TOKEN,
    REACT_APP_MAPBOX_STYLE: MAPBOX_STYLE
} = process.env;

const Map = ():JSX.Element => {

  const [viewport, setViewPort ] = useState({
    width: "100%",
    height: 900,
    latitude: 32.072048,
    longitude: 34.898529,
    zoom: 17
  });
  
  return (
    <div>
      <MapGL
        {...viewport}
        mapboxApiAccessToken={MAPBOX_TOKEN}
        mapStyle={MAPBOX_STYLE}
        onViewportChange={(viewport:any) => setViewPort({...viewport})}
      >
        <Marker
            key={1}
            latitude={32.072048}
            longitude={34.898529}
        >
            <img src="/media/location.svg" width={50} height={50} alt="map pin"/>
        </Marker>
        <GeolocateControl
          positionOptions={{enableHighAccuracy: true}}
          trackUserLocation={true}
        />
      </MapGL>
    </div>
  )
}

export default Map;
