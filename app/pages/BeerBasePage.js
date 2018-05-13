import PropTypes from 'prop-types';
import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchBeers, addBeer, deleteBeer, updateBeer } from '../actions/beers';
import '../styles/main.scss';

const myBeer = {
    'name': 'harnaś',
    'alcohol': 5.7,
    'ibu': 12,
    'breweryId': 1,
    'servingTemp': 25,
    'type': 'gowno',
    'description': 'zaq'
}

const updBeer = {
    'id': 20002,
    'name': 'tyskie',
    'alcohol': 5.7,
    'ibu': 12
}

const delBeer = {
    'id': 2
}

const mapStateToProps = state => {
    return {
        beers: state.beersReducer.beers,
        loading: state.beersReducer.loading,
        error: state.beersReducer.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchBeers: () => dispatch(fetchBeers()),
        addBeer: beer => dispatch(addBeer(beer)),
        deleteBeer: id => dispatch(deleteBeer(id)),
        updateBeer: beer => dispatch(updateBeer(beer)) 
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
                <button onClick = {() => this.props.addBeer(myBeer)}>Click to add beer</button>
                <button onClick = {() => this.props.deleteBeer(delBeer)}>Click to delete beer with id 1</button>
                <button onClick = {() => this.props.updateBeer(updBeer)}>Click to update beer with id 20002</button>
            </div>
            );
    }
}

BeerBasePage.propTypes = {
    fetchBeers: PropTypes.func,
    addBeer: PropTypes.func,
    deleteBeer: PropTypes.func,
    updateBeer: PropTypes.func,
    beers: PropTypes.array,
    loading: PropTypes.bool,
    error: PropTypes.string
}

export default connect(mapStateToProps, mapDispatchToProps)(BeerBasePage);




