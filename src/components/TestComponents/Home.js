import React, { Component } from 'react';
// import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';


import routes from './routes';

class Home extends Component {

    constructor() {
        super()

        this.state = {
            route: 'login'   
        }
        this.setRoute = this.setRoute.bind(this);
    }

    // componentDidMount() {
    //     this.setState({
    //         propsToPass: this.props
    //     })
    // }

    setRoute(route) {
        this.setState({route})
    }

    render() {
        const { route } = this.state;
        const col = '123px';
        const gridStyles = {
            login:              { gridTemplateColumns: `1fr ${col} ${col} ${col}` }
            ,classroom:         { gridTemplateColumns: `${col} 1fr ${col} ${col}` }
            ,extra_resources:   { gridTemplateColumns: `${col} ${col} 1fr ${col}` }
            ,provo:             { gridTemplateColumns: `${col} ${col} ${col} 1fr` }
        }

        // const { location, computedMatch, ...rest } = this.props;

        return (
            <div className="Home" style={ gridStyles[this.state.route] }>
                
                <Link onClick={ () => { this.setState({route: 'login'}); } } to="/login">
                    <section className="space Home_login" >
                        <h1>{ route !== 'login' && 'Log Out'}</h1>
                        { route === 'login' && routes }
                    </section>
                </Link>

                <Link onClick={ () => { this.setState({route: 'classroom'}); } } to="/classroom">
                    <section className="space Home_classroom" >
                        <h1>{ route !== 'classroom' && 'Classroom'}</h1>
                        { route === 'classroom' && routes }
                    </section>
                </Link>

                <Link onClick={ () => { this.setState({route: 'extra_resources'}); } } to="/extra_resources">
                    <section className="space Home_extra_resources" >
                        <h1>{ route !== 'extra_resources' && 'Extra Resources'}</h1>
                        { route === 'extra_resources' && routes }
                    </section>
                </Link>

                <Link onClick={ () => { this.setState({route: 'provo'}); } } to="/provo">
                    <section className="space Home_provo" >
                        <h1>{ route !== 'provo' && 'Provo'}</h1>
                        { route === 'provo' && routes }
                    </section> 
                </Link>

                
                    
            </div>
        )
    }
}

export default Home;
