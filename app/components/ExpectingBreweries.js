import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ExpectingBrewery from './ExpectingBrewery';
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
                    <h1>Oczekujące browary</h1>
                    <div>
                        {this.props.breweries.map(brewery => {
                            return <ExpectingBrewery confirm={this.props.confirm} brewery={brewery}/>
                        })}                                                
                    </div>
                </div>
            </div>
        )
    }
}

ExpectingBreweries.propTypes = {
    confirm: PropTypes.func,
    breweries: PropTypes.array
}
