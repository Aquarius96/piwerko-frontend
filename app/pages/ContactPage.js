import React, {Component} from 'react';
import '../styles/contact-page.scss';
import '../styles/input.scss';
import '../styles/button.scss';

class ContactPage extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
        <div className="contact-page container">
            <p>Chcesz skontaktować się z administratorem? Wypełnij poniższy formularz!</p>
            <div className="form">
            <input className="my-input"type="text"
                  placeholder="Jak masz na imię?"
                  title="Wpisz miasto"></input>
            <input className="my-input"type="text"
                  placeholder="Twój adres e-mail"
                  title="Wpisz miasto"></input>
            <input className="my-input"type="text"
                  placeholder="Temat Twojego zgłoszenia"
                  title="Wpisz miasto"></input>
            <textarea className="textarea"type="text"
                  placeholder="Tekst Twojego zgłoszenia..."
                  title="Wpisz miasto"></textarea>

            <button className="wyslij-zgloszenie">Wyślij zgłoszenie</button>      

            </div>
        </div>
        );
    }
}

export default ContactPage;
