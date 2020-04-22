import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// components
import MapGL, { Marker, Popup, ViewportProps } from 'react-map-gl';
import Coordinates from '../../interfaces/Map/Coordinates';
import MarkerItem from './components/MarkerItem/Component';
import PopupItem from './components/PopupItem/Component';
// constants
import { RootState } from '../../state/RootState';
import { defaultViewport } from './helpers/DefaultState';
import { types } from '../../state/Reducers/Map';
// helper
import getCurrentUserLocation from './helpers/functions/GetCurrentUserLocation';
// TODO: delete line after retrive data from api call
import transportations from '../../data/AvailableRentalTransportation.json';

const { REACT_APP_MAPBOX_TOKEN: MAPBOX_TOKEN, REACT_APP_MAPBOX_STYLE: MAPBOX_STYLE } = process.env;

// Component
const Map: React.FC = (): JSX.Element => {
    const dispatch = useDispatch();
    // local state
    const [viewport, setViewPort] = useState<ViewportProps>(defaultViewport); // map coordinates
    const [userPosition, setUserPosition] = useState<Coordinates>({ latitude: 0, longitude: 0 }); // user geolocation coordinates
    // global state
    const showPopup = useSelector((state: RootState) => state.map.showPopup);
    const selectedMarkerCoordinates = useSelector((state: RootState) => state.map.selectedMarker.coordinates);

    const fetchUserCurrentLocation = async (): Promise<void> => {
        const position = await getCurrentUserLocation();
        const { latitude, longitude } = position.coords;
        setUserPosition({ latitude, longitude });
        setViewPort({ ...viewport, latitude, longitude });
    };

    const fetchAvailableRentalTransportation = (): void => {
        // TODO: fetch available rental transportation data from server
    };

    // component did mount
    useEffect((): void => {
        fetchUserCurrentLocation();
        fetchAvailableRentalTransportation();
    }, []);

    const onClosePopup = (): void => {
        dispatch({
            type: types.TOGGLE_POPUP,
            payload: false,
        });
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
                {/* User current location */}
                <Marker key={1} latitude={userPosition.latitude} longitude={userPosition.longitude}>
                    <MarkerItem></MarkerItem>
                </Marker>

                {/* Available cars to rent */}
                {transportations.map((transportation) => {
                    return (
                        <Marker
                            key={transportation.id}
                            latitude={transportation.coordinates.latitude}
                            longitude={transportation.coordinates.longitude}
                        >
                            <MarkerItem transportation={transportation}></MarkerItem>
                        </Marker>
                    );
                })}

                {/* Popup */}
                {showPopup && (
                    <Popup
                        latitude={selectedMarkerCoordinates.latitude}
                        longitude={selectedMarkerCoordinates.longitude}
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
