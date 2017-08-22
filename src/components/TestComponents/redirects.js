import React from 'react';
import { Redirect, Switch } from 'react-router-dom';

export default (
    <div>
        <Switch>
            <Redirect from="/login" to="/login" />
            <Redirect from="/classroom" to="/classroom" />
            <Redirect from="/extra_resources" to="/extra_resources" />
            <Redirect from="/provo" to="/provo" />
            <Redirect from="*" to="/classroom" />
        </Switch>
    </div>
)