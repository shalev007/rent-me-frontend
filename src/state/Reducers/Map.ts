import { AnyAction, Reducer } from 'redux';
import mapState, { MapState } from '../States/Map';

export const types = {
    MARKER_CHOOSEN: 'MARKER_CHOOSEN',
    TOGGLE_POPUP: 'TOGGLE_POPUP',
};

const mapReducer: Reducer = (state: MapState = mapState, action: AnyAction) => {
    switch (action.type) {
        case types.TOGGLE_POPUP:
            return {
                ...state,
                showPopup: action.payload,
            };
        case types.MARKER_CHOOSEN:
            return {
                ...state,
                selectedMarker: action.payload,
            };
        default:
            return state;
    }
};

export default mapReducer;
