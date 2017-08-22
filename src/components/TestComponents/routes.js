import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Login from './Login';
import Classroom from './Classroom';
import ExtraResources from './ExtraResources';
import Provo from './Provo';

export default (
    <Switch>
        <Route path="/login" component={ Login } />
        <Route path="/classroom" component={ Classroom } />
        <Route path="/extra_resources" component={ ExtraResources } />
        <Route path="/provo" component={ Provo } />
        <Redirect from="*" to="/login" />
    </Switch>
)


{/* <Route path="/login" render={ props => <Login {...props} setRoute={this.setRoute} /> } />
<Route path="/classroom" render={ props => <Classroom {...props} setRoute={this.setRoute}/> } /> 
<Route path="/extra_resources" render={ props => <ExtraResources {...props} setRoute={this.setRoute} /> } /> 
<Route path="/provo" render={ (props) => <Provo {...props} setRoute={this.setRoute}/> } /> */}