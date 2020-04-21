import map, { MapState } from './States/Map';

export interface RootState {
    map: MapState;
}

const rootState: RootState = { map };

export default rootState;
