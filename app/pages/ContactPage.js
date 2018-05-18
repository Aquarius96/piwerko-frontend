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
            <div className="frame">
            <p>Chcesz skontaktować się z administratorem? Wypełnij poniższy formularz!</p>
            </div>
            <div className="form">
            <input className="myInput"type="text"
                  placeholder="Jak masz na imię?"
                  title="Wpisz miasto"></input>
            <input className="myInput"type="text"
                  placeholder="Twój adres e-mail"
                  title="Wpisz miasto"></input>
            <input className="myInput"type="text"
                  placeholder="Temat Twojego zgłoszenia"
                  title="Wpisz miasto"></input>

            </div>
        </div>
        );
    }
}

export default ContactPage;
