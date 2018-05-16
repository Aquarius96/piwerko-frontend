import React, {Component} from 'react';
import '../styles/LoginPage.scss';
import '../styles/button.scss';

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = ({visible: 'login'}); // register / forgot
    }
    switchForm = (name) => {
        this.setState({visible: name});
    }
    render() {
        return (
            <div className="LoginPage container">
            
            <div className="form">
 
            <form className={(this.state.visible === 'register' ? 'shown' : 'hidden')}>
 
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
 
                <button className="zaloguj-zarejestruj" onClick={this.register}>Stwórz konto</button>
                <p className="message">Jesteś już zarejestrowany?
                <a className="beniz" onClick={() => this.switchForm('login')}> Zaloguj się!</a>
                </p>
                <p className="message">Pola oznaczone * są obowiązkowe</p>
            </form>
 
            <form className={(this.state.visible === 'login' ? 'shown' : 'hidden')}>
                <h1>Logowanie</h1>
                <input name="login" type="text" placeholder="Login..." required/>
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
                <button className="przyciskZaloguj" onClick={this.forgotPassword}>Przypomnij</button>
                <p className="message">
                <a className="beniz" onClick={() => this.switchForm('login')}> Wróć do logowania</a>
                </p>
            </form>
            </div>
        </div>
        );
    }
}

export default LoginPage;
