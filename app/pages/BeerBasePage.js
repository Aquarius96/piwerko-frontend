import PropTypes from 'prop-types';
import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchBeers } from '../actions/beers';
import '../styles/main.scss';

const mapStateToProps = state => {
    return {
        beers: state.beersReducer.beers,
        loading: state.beersReducer.loading,
        error: state.beersReducer.error
    }
}

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
        if(this.props.loading) {
            return (
                <div className="BeerBasePage">
                    <p>BeerBasePage works!</p>
                    <p>but is not loaded yet.</p>
                </div>
                );
        }
        if(!this.props.loading && this.props.error) {
            return (
                <div className="BeerBasePage">
                    <p>Something went wrong. Your data was not loaded properly.</p>
                    <p>{this.props.error}</p>
                </div>
                );
        }
        return (
            <div className="BeerBasePage">
                <p>BeerBasePage works!</p>
                <p>and is fully loaded!</p>
                <p>beers length is {this.props.beers.length}</p>
            </div>
            );
    }
}

BeerBasePage.propTypes = {
    fetchBeers: PropTypes.func,
    beers: PropTypes.array,
    loading: PropTypes.bool,
    error: PropTypes.string
}

export default connect(mapStateToProps, mapDispatchToProps)(BeerBasePage);




