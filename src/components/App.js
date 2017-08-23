import React, { Component } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import Home from './Home';
import '../styles/main.css';

export default class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					<Home />
				</div>
			</Router>
		)
	}
}