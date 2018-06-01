import React, { Component } from 'react';
import ExpectingBeer from './ExpectingBeer';
import '../styles/expecting-beers.scss';

export default class ExpectingBeers extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div className="expecting-beers container">
                <div className="form">
                    <h1>Oczekujące Piwa</h1>
                    <div>
                        <ExpectingBeer/>
                        <ExpectingBeer/>
                        <ExpectingBeer/>
                        <ExpectingBeer/>
                        <ExpectingBeer/>
                        <ExpectingBeer/>
                    </div>
                </div>
            </div>
        )
    }
}
