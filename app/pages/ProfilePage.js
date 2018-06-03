import React, { Component } from 'react';
import '../styles/profile-page.scss';
import '../styles/button.scss';
 
class ProfilePage extends Component {
    constructor(props) {
        super(props)
 
        this.state = {
            editing: false,
            editingPassword: false
        }
    }
 
    handleEditProfileData = (e) => {
        e.preventDefault();
        this.setState({
            editing: true,
            editingPassword: false            
        });
    }
 
    handleEditPassword = (e) => {
        e.preventDefault();
        this.setState({
            editing: true,
            editingPassword: true            
        });
    }
 
    handleSaveProfileData = (e) => {
        e.preventDefault();
        this.setState({
            editing: false
        });
    }  
 
    render() {
        return (
            <div className="profile-page container">
                <div className="form">
                    <div className="new-form">
                        <div className="wrapper">
                            <div className="profile-info-form">
                                {this.state.editing && !this.state.editingPassword ?
                                    <div>
                                        <h1>Marcin</h1>
                                        <input type="text" value="Marcin" />
                                        <input type="text" value="Zapadka" />
                                        <input type="text" value="25.05.1996" />
                                        <input type="text" value="Marcin@wp.pl" />                                        
                                    </div> :  null}
                                {this.state.editing && this.state.editingPassword ?                                
                                    <div>
                                        <h1>Marcin</h1>
                                        <input type="text" value="Stare hasło" />
                                        <input type="text" value="Nowe hasło" />
                                        <input type="text" value="Powtórz nowe hasło" />                                        
                                    </div> : null
                                }
                                {!this.state.editing ?
                                <div>
                                    <h1>Marcin</h1>
                                    <p>Imię: Marcin</p>
                                    <p>Nazwisko: Zapadka</p>
                                    <p>Data urodzenia: 25.05.1996</p>
                                    <p>E-mail: Marcin@wp.pl</p>
                                </div> : null
                                }                                
                            </div>
                            <div className="image-form">
                                <div className="sep"></div>
                                <img src={'https://i.ytimg.com/vi/z5LhNxi1xK8/maxresdefault.jpg'} />
                            </div>
                            <div className="item1">
                                {this.state.editing ?
                                    <span>
                                    <button className="edytuj-dane" onClick={this.handleSaveProfileData}>Zapisz</button>
                                    <button className="edytuj-dane" onClick={this.handleSaveProfileData}>Wróć</button>
                                    </span>
                                    :
                                    <span>
                                    <button className="edytuj-dane" onClick={this.handleEditProfileData}>Edytuj dane</button>
                                    <button className="edytuj-dane" onClick={this.handleEditPassword}>Zmień hasło</button>
                                    </span>
                                }
                               
                            </div>
                            <div className="item2"><button className="zmien-avatar">Zmień avatar</button></div>
                        </div>
 
                            <h1>Moje ulubione piwa</h1>
 
                            <div className="fav-beer">
                                <div className="fav-beer-logo">
                                    <img className="img-ulubione" src="https://drizly-products2.imgix.net/ci-michelob-ultra-244763edf588f5e5.jpeg?auto=format%2Ccompress&fm=jpeg&q=20" />
                                </div>
                                <div className="fav-beer-name"> Kormoran </div>
                                <div className="fav-beer-rating"> Ocena: 3/5 </div>
                            </div>
 
                    </div>
                </div>
            </div>
        );
    }
}
 
export default ProfilePage;
