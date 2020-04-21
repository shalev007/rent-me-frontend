import { createStore } from 'redux';
import rootReducer from './RootReducer';
import rootState from './RootState';

const store = createStore(rootReducer, rootState);
export default store;
