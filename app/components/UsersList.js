import React, { Component } from 'react';
import '../styles/users-list.scss';

import SingleUser from './SingleUser';

export default class UsersList extends Component {
    render() {
        return (
            <div className="users-list container">
                <div className="form">
                    <h1>Lista użytkowników</h1>
                    <div>
                        <SingleUser/>
                    </div>
                </div>
            </div>
        )
    }
}
