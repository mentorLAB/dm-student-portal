import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';

import Login from './Login';
import Classroom from './Classroom';
import ExtraResources from './ExtraResources';
import Provo from './Provo';
import redirects from './redirects';

class Home extends Component {

    constructor() {
        super()

        this.state = {
            route: ''   
        }
        this.setRoute = this.setRoute.bind(this);
    }

    setRoute(route) {
        this.setState({route})
    }

    render() {
        const col = '123px';
        const gridStyles = {
            login:              { gridTemplateColumns: `1fr ${col} ${col} ${col}` }
            ,classroom:         { gridTemplateColumns: `${col} 1fr ${col} ${col}` }
            ,extra_resources:   { gridTemplateColumns: `${col} ${col} 1fr ${col}` }
            ,provo:             { gridTemplateColumns: `${col} ${col} ${col} 1fr` }
        }

        return (
            <div className="Home" style={ gridStyles[this.state.route] }>
                
                <Link to="/login">
                    <section className="space Home_login" >
                        <h1>{ this.state.route !== 'login' && 'Log Out'}</h1>
                        <Switch>
                            <Route path="/login" render={ props => <Login {...props} setRoute={this.setRoute}/> } />
                            { redirects }
                        </Switch>
                    </section>
                </Link>

                <Link to="/classroom">
                    <section className="space Home_classroom" >
                        <h1>{ this.state.route !== 'classroom' && 'Classroom'}</h1>
                        <Switch> 
                            <Route path="/classroom" render={ props => <Classroom {...props} setRoute={this.setRoute}/> } /> 
                            { redirects }
                        </Switch>
                    </section>
                </Link>

                <Link to="/extra_resources">
                    <section className="space Home_extra_resources" >
                        <h1>{ this.state.route !== 'extra_resources' && 'Extra Resources'}</h1>
                        <Switch> 
                            <Route path="/extra_resources" render={ props => <ExtraResources {...props} setRoute={this.setRoute} /> } /> 
                            { redirects }
                        </Switch>
                    </section>
                </Link>

                <Link to="/provo">
                    <section className="space Home_provo" >
                        <h1>{ this.state.route !== 'provo' && 'Provo'}</h1>
                        <Switch>
                            <Route path="/provo" render={ (props) => <Provo {...props} setRoute={this.setRoute}/> } />
                            { redirects }
                        </Switch>
                    </section> 
                </Link>

                
                    
            </div>
        )
    }
}

export default Home;