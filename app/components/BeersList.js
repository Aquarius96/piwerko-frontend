import PropTypes from 'prop-types';
import React, {Component} from 'react';
import '../styles/select.scss';
import '../styles/beer-base-page.scss';


class BeersList extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="beers-list">
            <div className="select">
            <select>
                <option selected value="xD">Sortuj po nazwie</option>
                <option value="xDD">Malejąco</option>
                <option value="xDDD">Rosnąco</option>
            </select>
            </div>
            <div className="form">

                {this.props.beers.map(beer => 
                    <p>{beer.name}</p>
                )}
            </div>
            </div>
        );
    }
}

BeersList.propTypes = {
    beers: PropTypes.array
}

export default BeersList;
