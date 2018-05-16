import PropTypes from 'prop-types';
import React, {Component} from 'react';

class BeersList extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="BeersList">
                {this.props.beers.map(beer => 
                    <p>{beer.name}</p>
                )}
            </div>
        );
    }
}

BeersList.propTypes = {
    beers: PropTypes.array
}

export default BeersList;
