import PropTypes from 'prop-types';
import React, {Component} from 'react';

class BreweriesList extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="BreweriesList">
                {this.props.breweries.map(brewery => 
                    <p>{brewery.name}</p>
                )}
            </div>
        );
    }
}

BreweriesList.propTypes = {
    breweries: PropTypes.array
}

export default BreweriesList;
