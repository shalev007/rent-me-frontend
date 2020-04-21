import React, { useState, useEffect } from 'react';
import MapGL, { Marker, Popup, ViewportProps } from 'react-map-gl';
import Coordinates from './interfaces/Coordinates';
import MarkerItem from './components/MarkerItem/Component';
import PopupItem from './components/PopupItem/Component';
import { defaultUserCoordinates, defaultViewport } from './helpers/DefaultState';
import getCurrentUserLocation from './helpers/functions/GetCurrentUserLocation';
// testing
import availableRentalTransportations from '../../data/AvailableRentalTransportation.json';

// console.log(availableRentalTransportations);

const { REACT_APP_MAPBOX_TOKEN: MAPBOX_TOKEN, REACT_APP_MAPBOX_STYLE: MAPBOX_STYLE } = process.env;

const Map: React.FC = (): JSX.Element => {
    const [viewport, setViewPort] = useState<ViewportProps>(defaultViewport); // map coordinates
    const [isMarkerSelected, setIsMarkerSelected] = useState<boolean>(false); // is marker selected
    const [userPosition, setUserPosition] = useState<Coordinates>(defaultUserCoordinates); // user geolocation coordinates
    const [markerPosition, setMarkerPosition] = useState<Coordinates>({ longitude: 0, latitude: 0 }); // clicked marker position

    const fetchUserCurrentLocation = async (): Promise<void> => {
        const position = await getCurrentUserLocation();
        const { latitude, longitude } = position.coords;
        setUserPosition({ latitude, longitude });
        setViewPort({ ...viewport, latitude, longitude });
    };

    const fetchAvailableRentalTransportation = (): void => {
        // fetch available rental transportation data from server
    };

    // component did mount
    useEffect((): void => {
        fetchUserCurrentLocation();
        fetchAvailableRentalTransportation();
    }, []);

    const onClickMarkerItem = (coordinates: Coordinates): void => {
        setMarkerPosition({ ...coordinates });
        setIsMarkerSelected(true);
    };

    const onClosePopup = (): void => {
        setIsMarkerSelected(false);
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
                    <MarkerItem onClick={(): void => onClickMarkerItem(userPosition)}></MarkerItem>
                </Marker>

                {/* Available cars to rent */}
                {availableRentalTransportations.map((availableRentalTransportation) => {
                    return (
                        <Marker
                            key={availableRentalTransportation.id}
                            latitude={availableRentalTransportation.coordinates.latitude}
                            longitude={availableRentalTransportation.coordinates.longitude}
                        >
                            <MarkerItem
                                onClick={(): void => onClickMarkerItem(availableRentalTransportation.coordinates)}
                                seller={availableRentalTransportation.seller}
                            ></MarkerItem>
                        </Marker>
                    );
                })}

                {/* Popup */}
                {isMarkerSelected && (
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
