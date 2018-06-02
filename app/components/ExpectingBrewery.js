import React, { Component } from 'react';
import '../styles/expecting-breweries.scss';

export default class ExpectingBrewery extends Component {
    constructor(props) {
        super(props)

        this.state = {
            showDetails: false
        }
    }

    details = () => {
        console.log('szczegóły browaru');
        this.setState({
            showDetails: !this.state.showDetails
        })
    }

    confirmBrewery = () => {
        console.log('zatwierdzam browar');
    }

    discardBrewery = () => {
        console.log('odrzucam browar');
    }

    render() {
        return (
            <div className={this.state.showDetails ? 'exp-brewery-detailed' : 'exp-brewery'}>
                <div className="exp-brewery-logo">
                    <img src="https://drizly-products2.imgix.net/ci-michelob-ultra-244763edf588f5e5.jpeg?auto=format%2Ccompress&fm=jpeg&q=20" height="70" />
                </div>
                <div className="exp-brewery-name">
                    <h2>Warka</h2>
                </div>
                <div className="exp-brewery-buttons">
                    <button className="exp-brewery-1" onClick={this.details}>
                        Szczegóły
                    </button>
                    <button className="exp-brewery-2" onClick={this.confirmBrewery}>
                        Zatwierdź
                    </button>
                    <button className="exp-brewery-3" onClick={this.discardBrewery}>
                        Odrzuć
                    </button>
                </div>
                {this.state.showDetails ? 
                <div className="exp-brewery-details">
                    Szczegóły Browaru...
                </div> : null }
            </div>
        )
    }
}

