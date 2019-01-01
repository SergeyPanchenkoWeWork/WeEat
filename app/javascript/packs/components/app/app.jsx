import React from 'react';
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import Routes from './routes';

export default function App(props) {
    return (
        <Provider store={props.store}>
            <MuiThemeProvider theme={props.theme} >
                <CssBaseline>
                    <Router>
                        <Routes />
                    </Router>
                </CssBaseline>
            </MuiThemeProvider>
        </Provider>
    );
}