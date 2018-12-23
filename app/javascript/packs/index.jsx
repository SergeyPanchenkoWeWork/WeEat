// Polyfill async await
require("babel-polyfill");

import React from 'react';
import ReactDOM from 'react-dom'

import App from './components/app/app';
import { init as initStore } from "./modules/redux";
import { init as initTheme } from "./modules/theme";
import rootReducer from './reducers';

const init = () => {
    const store = initStore(rootReducer);
    const theme = initTheme();

    ReactDOM.render(
        <App store={store} theme={theme} />,
        document.body.appendChild(document.createElement('div')),
    );
};

    init();