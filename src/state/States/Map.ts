import Transportation from '../../interfaces/Map/Transportation';

export interface MapState {
    showPopup: boolean;
    selectedMarker: Transportation;
}

const mapState: MapState = {
    showPopup: false,
    selectedMarker: {
        seller: {},
        coordinates: {
            longitude: 0,
            latitude: 0,
        },
    },
};

export default mapState;
