import React, { Component } from 'react';
import Home from './TestComponents/Home';
import '../styles/main.css';

export default class App extends Component {
	render() {
		return (
			<div className="App">
				<Home />
			</div>
		)
	}
}