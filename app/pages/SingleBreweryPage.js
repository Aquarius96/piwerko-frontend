import PropTypes from 'prop-types';
import React, {Component} from 'react';
import { connect } from 'react-redux';
import '../styles/single-brewery-page.scss';
import Loader from '../components/Loader';
import {fetchSingleBrewery, fetchSingleBreweryBeers} from '../actions/breweries';
import {Link} from 'react-router-dom';

const mapStateToProps = state => {
    return {
        brewery: state.breweriesReducer.singleBrewery,
        loading: state.breweriesReducer.loading,
        beers: state.breweriesReducer.singleBreweryBeers        
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchSingleBrewery: id => dispatch(fetchSingleBrewery(id)),
        fetchSingleBreweryBeers: id => dispatch(fetchSingleBreweryBeers(id))
    }
}

class SingleBreweryPage extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchSingleBrewery(this.props.match.params.id);
        this.props.fetchSingleBreweryBeers(this.props.match.params.id)
    }

    render() {
        if(this.props.loading) {
            return <Loader />
        }
        return (
        <div className="single-brewery-page container">
        <h1>{this.props.brewery.name}</h1>
        <div className="wrapper">
        <div className="item1">
        <img src={this.props.brewery.photo_URL} height="250" width="550"/>
        </div>
        <div className="item2">
        <p>Miasto: {this.props.brewery.city}</p>
        <p>Ulica: {this.props.brewery.street}</p>
        <p>Nr budynku: {this.props.brewery.streetNumber}</p>
        <p>Strona www: {this.props.brewery.web_Url}</p>
        </div>
        <div className="item3">
        <p className="p-opis-browaru">{this.props.brewery.description}</p>
        </div>
        </div>
        
        <h1>Produkty</h1>
        <div className="produkty-wrapper">
        {this.props.beers.map(beer => {
            return (
                <Link to={'/beer/' + beer.id}>
<div className="produkty">
        <div className="pojedynczy-produkt-wrapper">
        <div className="produkt-zdjecie">
        <img className="img-produkty" src={beer.photo_URL} />
        </div>
        <div className="produkt-nazwa">
        <p className="p-produkt">{beer.name}</p>
        </div>
        </div>
        </div>
                </Link>
        
            );
        })}
        
                                                                
        </div>
        </div>
        );
    }
}

SingleBreweryPage.propTypes = {
    singleBrewery: PropTypes.object,
    loading: PropTypes.bool,
    fetchSingleBrewery: PropTypes.func,
    match: PropTypes.object,
    brewery: PropTypes.object,
    fetchSingleBreweryBeers: PropTypes.func,
    beers: PropTypes.array
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleBreweryPage);
