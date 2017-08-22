import React, { Component } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import Home from './TestComponents/Home';
import '../styles/main.css';
// import routes from '../routes';

export default class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					<Home />
					{/* {routes} */}
				</div>
			</Router>
		)
	}
}