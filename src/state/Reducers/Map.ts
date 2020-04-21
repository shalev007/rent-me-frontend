import { AnyAction, Reducer } from 'redux';
import mapState, { MapState } from '../States/Map';

const mapReducer: Reducer = (state: MapState = mapState, action: AnyAction) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default mapReducer;
