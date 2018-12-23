import React from 'react';
import { Switch, Route } from 'react-router';

import HomePage from '../home/homePage';


export default function routes() {
    return (
        <Switch>
            <Route path="/" component={HomePage} />
        </Switch>
    );
}