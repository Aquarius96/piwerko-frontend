import React, { Component } from 'react';
import '../styles/users-list.scss';

export default class SingleUser extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    banUser = () => {
        console.log('banuję użytkownika');
    }

    deleteUser = () => {
        console.log('usuwam użytkownika');
    }

    render() {
        return (
            <div className="user">
                <div className="user-logo">
                    <img src="https://openclipart.org/download/247319/abstract-user-flat-3.svg" height="70" />
                </div>
                <div className="user-details">
                    <h2>Paweł Mastalerz</h2>
                    <h3>login: pplayte</h3>
                </div>
                <div className="user-buttons">
                    <button className="user-ban" onClick={this.banUser}>
                        Zbanuj
                    </button>
                    <button className="user-delete" onClick={this.deleteUser}>
                        Usuń
                    </button>
                </div>
            </div>
        )
    }
}

