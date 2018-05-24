import React, {Component} from 'react';
import axios from 'axios';
import '../styles/contact-page.scss';
import '../styles/input.scss';
import '../styles/button.scss';

class ContactPage extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            emailData: {
                username: '',
                email: '',
                subject: '',
                body: ''
            }
        });
    }

    handleInputChange = (e) => {
        const emailData = Object.assign({}, this.state.emailData);
        emailData[e.target.name] = e.target.value;
        this.setState({emailData: emailData});
        console.log('dziala');
        console.log(this.state.emailData);
    }

    sendEmail = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8080/api/Contact/sendmail', this.state.emailData)
        .then(response => window.alert(response.data))
        .catch(error => {
            console.log(error.message);
        })
    }

    render() {
        return (
        <form className="contact-page container" onChange={this.handleInputChange}>
            <p>Chcesz skontaktować się z administratorem? Wypełnij poniższy formularz!</p>
            <div className="form">
            <input name="username" className="my-input"type="text"
                  placeholder="Jak masz na imię?"
                  title="Wpisz miasto"></input>
            <input name="email" className="my-input"type="text"
                  placeholder="Twój adres e-mail"
                  title="Wpisz miasto"></input>
            <input name="subject" className="my-input"type="text"
                  placeholder="Temat Twojego zgłoszenia"
                  title="Wpisz miasto"></input>
            <textarea name="body" className="textarea"type="text"
                  placeholder="Tekst Twojego zgłoszenia..."
                  title="Wpisz miasto"></textarea>

            <button className="wyslij-zgloszenie" onClick={this.sendEmail}>Wyślij zgłoszenie</button>      

            </div>
        </form>
        );
    }
}

export default ContactPage;
