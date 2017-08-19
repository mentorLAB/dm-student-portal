import React, { Component } from 'react';
import spaces from '../../styles/styleObjects/spaces';

class TestLogin extends Component {

    render() {
        const  { spaceBar } = spaces;

        return (
            <div className="Login">
                <section className="space Login_login"></section>
                <section className="space Login_classroom">
                    <span style={spaceBar.collapsed}>C l a s s r o o m</span>
                </section>
                <section className="space Login_extra_resources"></section>
                <section className="space Login_Provo"></section> 
            </div>
        )
    }
}

export default TestLogin;