import React, { useState, useEffect } from 'react';
import MapGL, { Marker, Popup, ViewportProps } from 'react-map-gl';
import Coordinates from './interfaces/Coordinates';
import MarkerItem from './components/MarkerItem/Component';
import PopupItem from './components/PopupItem/Component';
import { defaultUserCoordinates, defaultViewport } from './helpers/DefaultState';
import getCurrentUserLocation from './helpers/functions/GetCurrentUserLocation';

const { REACT_APP_MAPBOX_TOKEN: MAPBOX_TOKEN, REACT_APP_MAPBOX_STYLE: MAPBOX_STYLE } = process.env;

const Map: React.FC = (): JSX.Element => {
    const [viewport, setViewPort] = useState<ViewportProps>(defaultViewport);
    const [selectedMarker, setSelectedMarker] = useState<boolean>(false);
    const [userPosition, setUserPosition] = useState<Coordinates>(defaultUserCoordinates);
    const [markerPosition, setMarkerPosition] = useState<Coordinates>({ longitude: 0, latitude: 0 });

    // component did mount
    useEffect((): void => {
        const fetchData = async (): Promise<void> => {
            const position = await getCurrentUserLocation();
            const { latitude, longitude } = position.coords;
            setUserPosition({ latitude, longitude });
            setViewPort({ ...viewport, latitude, longitude });
        };
        fetchData();
    }, []);

    const onClickMarkerItem = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
        event.preventDefault();
        setMarkerPosition({ ...userPosition });
        setSelectedMarker(!selectedMarker);
    };

    const onClosePopup = (): void => {
        setSelectedMarker(false);
    };

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
                    <MarkerItem onClick={onClickMarkerItem}></MarkerItem>
                </Marker>
                {selectedMarker && (
                    <Popup
                        latitude={markerPosition.latitude}
                        longitude={markerPosition.longitude}
                        onClose={onClosePopup}
                    >
                        <PopupItem></PopupItem>
                    </Popup>
                )}
            </MapGL>
        </div>
    );
};

export default Map;
