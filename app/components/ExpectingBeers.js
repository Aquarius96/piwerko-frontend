import PropTypes from 'prop-types';
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
                    <h1>Oczekujące piwa</h1>
                    <div>                        
                        {this.props.beers.map(beer => {
                            return <ExpectingBeer delete={this.props.delete} confirm={this.props.confirm} beer={beer}/>
                        })}                                               
                    </div>
                </div>
            </div>
        )
    }
}

ExpectingBeers.propTypes = {
    confirm: PropTypes.func,
    delete: PropTypes.func,
    beers: PropTypes.array
}
