import React, { Component } from 'react';
import spaces from '../../styles/styleObjects/spaces';
import DMlogo from '../../imgs/DM-logo.png';
import bgImage from '../../imgs/login-bg.png';


class Login extends Component {

    constructor() {
        super()

        this.state = {
            username: ''
            ,password: ''
            ,deg: 0
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.spinLogo = this.spinLogo.bind(this);
    }

    componentDidMount() {
        document.getElementById('username').addEventListener('focus', () => this.spinLogo(555))
        document.getElementById('password').addEventListener('focus', () => this.spinLogo(-441))
        this.props.setRoute('login');
    }

    spinLogo(deg) {
        // e.preventDefault();
        this.state.deg += deg;
        const logo = document.getElementById('DMlogo');
        logo.style.transform = `rotate(${this.state.deg}deg)`;
        this.setState({ deg: this.state.deg})

    }

    handleSubmit(e) {
        e.preventDefault();
        const logo = document.getElementById('lockBody');
        logo.classList.toggle('unlock');
        // setTimeout(() => {logo.classList.toggle('unlock');}, 400);

        console.log('Username:', this.refs.username);
        console.log('Password:', this.refs.password);
    }

    render() {
        const  { spaceBar } = spaces;
        const bgStyles = {
            backgroundImage: `url(${bgImage})`
            ,backgroundRepeat: 'no-repeat'
            ,backgroundSize: 'cover'
            ,backgroundPosition: 'center'
        }

        return (
            <div className="Login" style={ bgStyles }>
                <form className="loginForm">
                    <div className="lock">
                        <div className="lockShank"></div>
                        <div id="lockBody">
                            <div>
                                <img id="DMlogo" alt="DM logo" src={ DMlogo } />
                            </div>
                        </div>
                    </div>

                    <input  type="text" 
                            ref="username" 
                            id="username" 
                            placeholder="username" 
                            onChange={() => this.spinLogo(23)}/>
                    <input  type="password" 
                            ref="password" 
                            id="password" 
                            placeholder="password" 
                            onChange={() => this.spinLogo(34)}/> 
                    <h3 className="loginButton" onClick={(e) => this.handleSubmit(e)}>Log In</h3>
                </form>
            </div>
        )
    }
}

export default Login;