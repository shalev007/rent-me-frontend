import React from 'react';
import ReactDOM from 'react-dom';
import 'src/style/index.css';
import App from 'src/components/App';
import * as serviceWorker from 'src/serviceWorker';
import { Provider } from 'react-redux';
import store from 'src/state/Store';

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>,
    document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
