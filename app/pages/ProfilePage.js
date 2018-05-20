import React, {Component} from 'react';
import '../styles/profile-page.scss';
import '../styles/button.scss';

class ProfilePage extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
        <div className="profile-page container">
            <div className="form">
            <div className="new-form">
                <div className="wrapper">
                    <div className="profile-info-form">
                    <h1>Marcien</h1>
                    <p>Imię: Marcien</p>
                    <p>Nazwisko: Zapadka</p>
                    <p>Data urodzenia: 25.05.1996</p>
                    <p>E-mail: Marcien@wp.pl</p>
                    </div>
                    <div className="image-form">
                    <div className="sep"></div>
                    <img src={'https://i.ytimg.com/vi/z5LhNxi1xK8/maxresdefault.jpg'} height="150"/>
                    </div>
                    <div className="item1"><button className="edytuj-dane">Edytuj dane</button></div>
                    <div className="item1"><button className="zmien-avatar">Zmień avatar</button></div>
                </div>
                </div>
            </div>
        </div>
        );
    }
}

export default ProfilePage;
