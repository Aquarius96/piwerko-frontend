import React, {Component} from 'react';
import '../styles/LoginPage.scss';


class LoginPage extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="LoginPage">
 
            <div className="form">
 
            <form name="registerForm" className="register-form">
 
                <h1>Rejestracja</h1>
 
                <input name="login" type="text" placeholder="Login*" required/>
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
 
                <button className="przyciskZaloguj" onClick={this.register}>Stwórz konto</button>
                <p className="message">Jesteś już zarejestrowany?
                <a className="beniz" onClick={() => this.switchwindows('login')}>Zaloguj się!</a>
                </p>
                <p className="message">Pola oznaczone * są obowiązkowe</p>
            </form>
 
            <form name="loginForm" className="login-form">
                <h1>Logowanie</h1>
                <input name="login" type="text" placeholder="Login..." required/>
                <input name="password" type="password" placeholder="Hasło..." required/>
                <button className="przyciskZaloguj" onClick={this.login}>Zaloguj</button>
                <p className="message">Nie masz konta?
                <a className="beniz" onClick={() => this.switchwindows('login')}>Zarejestruj się!</a>
                </p>
                <p className="message">Zapomniałeś hasła?
                <a className="beniz" onClick={() => this.switchwindows('forgot-password')}>Przypomnij hasło!</a>
                </p>
            </form>
 
            <form name="forgotPasswordForm" className="forgot-password-form">
                <h1>Zapomniałeś hasła?</h1>
                <input name="email" type="text" placeholder="Adres e-mail..." required/>
                <button className="przyciskZaloguj" onClick={this.forgotPassword}>Przypomnij</button>
                <p className="message">
                <a className="beniz" onClick={() => this.switchwindows('forgot-password')}>Wróć do logowania</a>
                </p>
            </form>
            </div>
        </div>
        );
    }
}

export default LoginPage;
