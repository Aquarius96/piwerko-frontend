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
                <div className="wrapper">
                    <div className="profile-info-form">
                    <h1>Dane konta</h1>
                    <p>Login: Marcien</p><br />
                    <p>E-mail: Marcien@wp.pl</p><br />
                    <p>Imię: Marcien</p><br />
                    <p>Nazwisko: Zapadka</p><br />
                    </div>
                    <div className="image-form">
                    <img src={'https://i.ytimg.com/vi/z5LhNxi1xK8/maxresdefault.jpg'} height="200"/>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default ProfilePage;
