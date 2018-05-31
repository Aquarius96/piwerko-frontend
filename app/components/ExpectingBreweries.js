import React, { Component } from 'react';
import '../styles/expecting-breweries.scss';

export default class ExpectingBreweries extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div className="expecting-breweries container">
                <div className="form">
                    <h1>Oczekujące Browary</h1>
                </div>
            </div>
        )
    }
}
