import React, { useState } from 'react';
import MapGL, { GeolocateControl, Marker, Popup, ViewportProps } from 'react-map-gl';

const { REACT_APP_MAPBOX_TOKEN: MAPBOX_TOKEN, REACT_APP_MAPBOX_STYLE: MAPBOX_STYLE } = process.env;
const location = {
    latitude: 32.072048,
    longitude: 34.898529,
};
const defaultViewport: ViewportProps = {
    width: 0,
    height: 900,
    latitude: 32.072048,
    longitude: 34.898529,
    altitude: 0,
    zoom: 17,
    maxZoom: 24,
    minZoom: 0,
    pitch: 0,
    maxPitch: 0,
    minPitch: 0,
    bearing: 0,
};

const Map: React.FC = (): JSX.Element => {
    const [viewport, setViewPort] = useState<ViewportProps>(defaultViewport);

    const [selectedLocation, setSelectedLocation] = useState({});

    return (
        <div>
            <MapGL
                {...viewport}
                mapboxApiAccessToken={MAPBOX_TOKEN}
                mapStyle={MAPBOX_STYLE}
                onViewportChange={(viewport: ViewportProps): void => setViewPort({ ...viewport })}
                width="100%"
            >
                <Marker key={1} {...location}>
                    <button
                        style={{ border: 'none', background: 'none', cursor: 'pointer' }}
                        onClick={(e): void => {
                            e.preventDefault();
                            setSelectedLocation(location);
                        }}
                    >
                        <img src="/media/location.svg" width={50} height={50} alt="map pin" />
                    </button>
                </Marker>
                {Object.entries(selectedLocation).length !== 0 && (
                    <Popup
                        latitude={32.072048}
                        longitude={34.898529}
                        onClose={(): void => {
                            setSelectedLocation({});
                        }}
                    >
                        <div>
                            <p>shalev</p>
                        </div>
                    </Popup>
                )}
                <GeolocateControl positionOptions={{ enableHighAccuracy: true }} trackUserLocation={true} />
            </MapGL>
        </div>
    );
};

export default Map;
