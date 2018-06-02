import React, { Component } from 'react';
import '../styles/expecting-beers.scss';

export default class ExpectingBeer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            showDetails: false
        }
    }

    details = () => {
        console.log('szczegóły piwa');
        this.setState({
            showDetails: !this.state.showDetails
        })
    }

    confirmBeer = () => {
        console.log('zatwierdzam bronka');
    }

    discardBeer = () => {
        console.log('odrzucam bronka');
    }

    render() {
        return (
            <div className={this.state.showDetails ? 'exp-beer-detailed' : 'exp-beer'}>
                <div className="exp-beer-logo">
                    <img src="https://drizly-products2.imgix.net/ci-michelob-ultra-244763edf588f5e5.jpeg?auto=format%2Ccompress&fm=jpeg&q=20" height="70" />
                </div>
                <div className="exp-beer-name">
                    <h2>Mocne full</h2>
                </div>
                <div className="exp-beer-buttons">
                    <button className="exp-beer-1" onClick={this.details}>
                        Szczegóły
                    </button>
                    <button className="exp-beer-2" onClick={this.confirmBeer}>
                        Zatwierdź
                    </button>
                    <button className="exp-beer-3" onClick={this.discardBeer}>
                        Odrzuć
                    </button>
                </div>
                {this.state.showDetails ? 
                <div className="exp-beer-details">
                    Alkohol:
                    IBU: 
                    Browar: <br/>
                    Temperatura podawania:
                    Typ piwa: <br/>
                </div> : null }
            </div>
        )
    }
}

