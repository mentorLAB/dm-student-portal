import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Classroom from './components/TestComponents/Classroom';

export default (
    <Switch> 
        <Route path="/classroom" render={ props => <Classroom {...props} setRoute={this.setRoute}/> } /> 
    </Switch>
)



