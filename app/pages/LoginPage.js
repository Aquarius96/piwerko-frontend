import PropTypes from 'prop-types';
import React, {Component} from 'react';
import { connect } from 'react-redux';
import { register, login } from '../actions/user';
import '../styles/LoginPage.scss';
import '../styles/button.scss';

const mapDispatchToProps = dispatch => {
    return {
        login: () => dispatch(login()),
        register: () => dispatch(register())
    };
};

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = ( {
            visible: 'login', 
            loginData: {
                username: '',
                password: ''
            },
            registerData: {
                username: '',
                password: '',
                firstname: '',
                lastname: '',
                email: '',
                phone: ''
            }
        }
        ); // register / forgot
    }

    switchForm = (name) => {
        this.setState({visible: name});
    }
    
    handleLoginInputChange = (e) => {
        const loginData = Object.assign({}, this.state.loginData);
        loginData[e.target.name] = e.target.value;
        this.setState({loginData: loginData});
        console.log('dziala');
        console.log(this.state.loginData);
    }

    handleRegisterInputChange = (e) => {
        const registerData = Object.assign({}, this.state.registerData);
        registerData[e.target.name] = e.target.value;
        this.setState({registerData: registerData});
        console.log('dziala');
        console.log(this.state.registerData);
    }

    login = (e) => {
        e.preventDefault();
        console.log(this.state.loginData);
        this.props.login();
    }

    register = (e) => {
        e.preventDefault();
        console.log(this.state.registerData);
        this.props.register();
    }

    render() {
        return (
            <div className="login-page container">
            
            <div className="form">
 
            <form className={(this.state.visible === 'register' ? 'shown' : 'hidden')} onChange={this.handleRegisterInputChange}>
 
                <h1>Rejestracja</h1>
 
                <input name="username" type="text" placeholder="Login*" required/>
                <input name="password" type="password" placeholder="Hasło*" required/>
                <input
                name="checkPassword"
                type="password"
                placeholder="Powtórz hasło*"
                required/>
                <input name="email" type="text" placeholder="E-mail*" required/>
                <input name="firstname" type="text" placeholder="Imie"/>
                <input name="lastname" type="text" placeholder="Nazwisko"/>
                <input name="phone" type="text" placeholder="Numer telefonu*"/>
 
                <button className="zaloguj-zarejestruj" onClick={this.register}>Stwórz konto</button>
                <p className="message">Jesteś już zarejestrowany?
                <a className="beniz" onClick={() => this.switchForm('login')}> Zaloguj się!</a>
                </p>
                <p className="message">Pola oznaczone * są obowiązkowe</p>
            </form>
 
            <form className={(this.state.visible === 'login' ? 'shown' : 'hidden')} onChange={this.handleLoginInputChange}>
                <h1>Logowanie</h1>
                <input name="username" type="text" placeholder="Login..." required/>
                <input name="password" type="password" placeholder="Hasło..." required/>
                <button className="zaloguj-zarejestruj" onClick={this.login}>Zaloguj</button>
                <p className="message">Nie masz konta?
                <a className="beniz" onClick={() => this.switchForm('register')}> Zarejestruj się!</a>
                </p>
                <p className="message">Zapomniałeś hasła?
                <a className="beniz" onClick={() => this.switchForm('forgot')}> Przypomnij hasło!</a>
                </p>
            </form>
 
            <form className={(this.state.visible === 'forgot' ? 'shown' : 'hidden')}>
                <h1>Zapomniałeś hasła?</h1>
                <input name="email" type="text" placeholder="Adres e-mail..." required/>
                <button className="zaloguj-zarejestruj" onClick={this.forgotPassword}>Przypomnij</button>
                <p className="message">
                <a className="beniz" onClick={() => this.switchForm('login')}> Wróć do logowania</a>
                </p>
            </form>
            </div>
        </div>
        );
    }
}

LoginPage.propTypes = {
    login: PropTypes.func,
    register: PropTypes.func
}

export default connect(null, mapDispatchToProps)(LoginPage);
