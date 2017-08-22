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



// const newProps = Object.assign( {}, this.props );
// console.log(newProps);
// delete newProps.location;

// const { location, ...rest } = this.props

// passPropsThroughRoute(props) {
//     const { location, computedMatch, ...rest } = props;
//     return (
//         <Login {...rest} setRoute={this.setRoute}/>
//     )
// }