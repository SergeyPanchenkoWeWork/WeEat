import React from 'react';
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { MuiThemeProvider } from '@material-ui/core/styles';

import Routes from './routes';

export default function App(props) {
    return (
        <Provider store={props.store}>
            <MuiThemeProvider theme={props.theme} >
                <Router>
                    <Routes />
                </Router>
            </MuiThemeProvider>
        </Provider>
    );
}