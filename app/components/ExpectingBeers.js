import React, { Component } from 'react';
import '../styles/expecting-beers.scss';

export default class ExpectingBeers extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    details = () => {
        console.log('szczegóły');
    }
    
    confirmBeer = () => {
        console.log('zatwierdzam bronka');
    }

    discardBeer = () => {
        console.log('odrzucam bronka');
    }

    render() {
        return (
            <div className="expecting-beers container">
                <div className="form">
                    <h1>Oczekujące Piwa</h1>
                    <div className="exp-beer">
                        <div className="exp-beer-logo">
                            <img src="https://drizly-products2.imgix.net/ci-michelob-ultra-244763edf588f5e5.jpeg?auto=format%2Ccompress&fm=jpeg&q=20" height="70" />
                        </div>
                        <div className="exp-beer-name">
                            <h2>Kormoran</h2>
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

                    </div>
                </div>
            </div>
        )
    }
}
