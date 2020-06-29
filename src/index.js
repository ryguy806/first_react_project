import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from './store';
import {persistStore} from "redux-persist";
import {PersistGate} from "redux-persist/lib/integration/react";
import App from './App.js';

const store = configureStore();
const persistor = persistStore(store);

ReactDOM.render(
    <Provider store={store} >
        <PersistGate loading={<div>loading...</div>} perisistor={persistor}>
            <App />
        </PersistGate>
    </Provider>,
    document.getElementById('root'),
);