import React, { Component } from 'react';
import DMlogo from '../../imgs/DM-logo.png';
// import spaces from '../../styles/styleObjects/spaces';
// import border from '../../imgs/border.png';

class Home extends Component {

    constructor() {
        super()

        this.state = {
            username: ''
            ,password: ''
            ,deg: 555
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.spinLogo = this.spinLogo.bind(this);
    }

    componentDidMount() {
        document.getElementById('username').addEventListener('focus', () => this.spinLogo(0))
        document.getElementById('password').addEventListener('focus', () => this.spinLogo(-241))
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
        // const  { spaceBar } = spaces;

        return (
            <div className="Home">
                <section className="space Home_login">
                    <h1>Log In</h1>
                    <form className="loginForm" onSubmit={() => alert('why')} >
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
                </section>

                <section className="space Home_classroom">
                    <h1>Classroom</h1>
                </section>

                <section className="space Home_extra_resources">
                    <h1>Extra Resources</h1>
                </section>

                <section className="space Home_Provo">
                    <h1>Provo</h1>
                </section> 
            </div>
        )
    }
}

export default Home;