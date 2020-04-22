import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './RootReducer';
import rootState from './RootState';

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, rootState, composeEnhancers(applyMiddleware()));
export default store;
