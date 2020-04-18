import React, { useState, useEffect } from 'react';
import MapGL, { Marker, Popup, ViewportProps } from 'react-map-gl';
import { Coordinates } from './Map/interfaces';
import getCurrentUserLocation from './Map/GeolocationCoordinates';

const { REACT_APP_MAPBOX_TOKEN: MAPBOX_TOKEN, REACT_APP_MAPBOX_STYLE: MAPBOX_STYLE } = process.env;

const userDefaultCoordinates: Coordinates = {
    latitude: 0,
    longitude: 0,
};

const defaultViewport: ViewportProps = {
    width: 0,
    height: 900,
    latitude: 0,
    longitude: 0,
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
    const [selectedMarker, setSelectedMarker] = useState<boolean>(false);
    const [userPosition, setUserPosition] = useState<Coordinates>(userDefaultCoordinates);
    const [markerPosition, setMarkerPosition] = useState<Coordinates>({ longitude: 0, latitude: 0 });

    // on component did mount
    useEffect((): void => {
        const fetchData = async (): Promise<void> => {
            const position = await getCurrentUserLocation();
            const { latitude, longitude } = position.coords;
            setUserPosition({ latitude, longitude });
            setViewPort({ ...viewport, latitude, longitude });
        };
        fetchData();
    }, []);

    return (
        <div>
            <MapGL
                {...viewport}
                mapboxApiAccessToken={MAPBOX_TOKEN}
                mapStyle={MAPBOX_STYLE}
                onViewportChange={(viewport: ViewportProps): void => setViewPort({ ...viewport })}
                width="100%"
            >
                <Marker key={1} latitude={userPosition.latitude} longitude={userPosition.longitude}>
                    <button
                        style={{ border: 'none', background: 'none', cursor: 'pointer' }}
                        onClick={(e): void => {
                            e.preventDefault();
                            setMarkerPosition({ ...userPosition });
                            setSelectedMarker(!selectedMarker);
                        }}
                    >
                        <img src="/media/location.svg" width={50} height={50} alt="map pin" />
                    </button>
                </Marker>
                {selectedMarker && (
                    <Popup
                        latitude={markerPosition.latitude}
                        longitude={markerPosition.longitude}
                        onClose={(): void => {
                            setSelectedMarker(false);
                        }}
                    >
                        <div>
                            <p>shalev</p>
                        </div>
                    </Popup>
                )}
            </MapGL>
        </div>
    );
};

export default Map;
