import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import Login from './Login';
import Classroom from './Classroom';
import ExtraResources from './ExtraResources';
import Provo from './Provo';

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
        const gridStyles = {
            login: { gridTemplateColumns: "1fr 122px 122px 122px" }
            ,classroom: { gridTemplateColumns: "122px 1fr 122px 122px" }
            ,extra_resources: { gridTemplateColumns: "122px 122px 1fr 122px" }
            ,provo: { gridTemplateColumns: "122px 122px 122px 1fr" }
        }

        return (
            <div className="Home" style={ gridStyles[this.state.route] }>
                
                
                <Link to="/">
                    <section className="space Home_login" >
                        <h1>{ this.state.route !== 'login' && 'Log Out'}</h1>
                        <Route exact path="/" render={ props => <Login {...props} setRoute={this.setRoute}/> } />
                    </section>
                </Link>

                <Link to="/classroom">
                    <section className="space Home_classroom" >
                        <h1>{ this.state.route !== 'classroom' && 'Classroom'}</h1>
                        <Route path="/classroom" render={ props => <Classroom {...props} setRoute={this.setRoute}/> } /> 
                    </section>
                </Link>

                <Link to="/extra_resources">
                    <section className="space Home_extra_resources" >
                        <h1>{ this.state.route !== 'extra_resources' && 'Extra Resources'}</h1>
                        <Route path="/extra_resources" render={ props => <ExtraResources {...props} setRoute={this.setRoute} /> } /> 
                    </section>
                </Link>

                <Link to="/provo">
                    <section className="space Home_provo" >
                        <h1>{ this.state.route !== 'provo' && 'Provo'}</h1>
                        <Route path="/provo" render={ (props) => <Provo {...props} setRoute={this.setRoute}/> } />
                    </section> 
                </Link>
            </div>
        )
    }
}

export default Home;