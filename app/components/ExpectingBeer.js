import PropTypes from 'prop-types';
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
                    <h2>{this.props.beer.name}</h2>
                </div>
                <div className="exp-beer-buttons">
                    <button className="exp-beer-1" onClick={this.details}>
                        Szczegóły
                    </button>
                    <button className="exp-beer-2" onClick={() => this.props.confirm(this.props.beer.id)}>
                        Zatwierdź
                    </button>
                    <button className="exp-beer-3" onClick={() => this.props.delete(this.props.beer.id)}>
                        Odrzuć
                    </button>
                </div>
                {this.state.showDetails ? 
                <div className="exp-beer-details">
                    Alkohol: {this.props.beer.alcohol} <br/>
                    IBU: {this.props.beer.ibu} <br/>
                    Browar: {this.props.beer.breweryName} <br/>
                    Temperatura podawania: {this.props.beer.servingTemp} <br/>
                    Typ piwa: {this.props.beer.type} <br/>
                </div> : null }
            </div>
        )
    }
}

ExpectingBeer.propTypes = {
    beer: PropTypes.object,
    confirm: PropTypes.func,
    delete: PropTypes.func
}
