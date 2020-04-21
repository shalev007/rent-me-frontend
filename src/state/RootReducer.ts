import { combineReducers, ReducersMapObject } from 'redux';
import map from './Reducers/Map';

const reducersMapObject: ReducersMapObject = {
    map,
};

const rootReducer = combineReducers(reducersMapObject);
export default rootReducer;
