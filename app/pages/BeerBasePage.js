import PropTypes from 'prop-types';
import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchBeers } from '../actions/index';



const mapDispatchToProps = dispatch => {
    return {
        fetchBeers: () => dispatch(fetchBeers()) 
    };
};

class BeerBasePage extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchBeers();
    }

    
    render() {
        return (
        <div className="BeerBasePage">BeerBasePage works!</div>
        );
    }
}

BeerBasePage.propTypes = {
    fetchBeers: PropTypes.func
}
export default connect(null, mapDispatchToProps)(BeerBasePage);

