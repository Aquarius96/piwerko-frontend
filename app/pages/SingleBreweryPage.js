import PropTypes from 'prop-types';
import React, {Component} from 'react';
import { connect } from 'react-redux';
import '../styles/single-brewery-page.scss';
import Loader from '../components/Loader';
import {fetchSingleBrewery} from '../actions/breweries';

const mapStateToProps = state => {
    return {
        brewery: state.breweriesReducer.singleBrewery,
        loading: state.breweriesReducer.loading        
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchSingleBrewery: id => dispatch(fetchSingleBrewery(id))
    }
}

class SingleBreweryPage extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchSingleBrewery(this.props.match.params.id);
    }

    render() {
        if(this.props.loading) {
            return <Loader />
        }
        return (
        <div className="single-brewery-page container">
        <h1>Browar Kormoran</h1>
        <div className="wrapper">
        <div className="item1">
        <img src="http://www.interservis.pl/wp-content/uploads/2016/03/Beznazwy-4.jpg" height="250" width="550"/>
        </div>
        <div className="item2">
        <p>Miasto:</p>
        <p>Ulica:</p>
        <p>Nr budynku:</p>
        <p>Strona www:</p>
        </div>
        <div className="item3">
        <p className="p-opis-browaru">A tu bedzie opis browaru</p>
        </div>
        </div>
        
        <h1>Produkty</h1>
        <div className="produkty-wrapper">
        <div className="produkty">
        <div className="pojedynczy-produkt-wrapper">
        <div className="produkt-zdjecie">
        <img className="img-produkty" src="https://drizly-products2.imgix.net/ci-michelob-ultra-244763edf588f5e5.jpeg?auto=format%2Ccompress&fm=jpeg&q=20" />
        </div>
        <div className="produkt-nazwa">
        <p className="p-produkt">Harnaś</p>
        </div>
        </div>
        </div>
        <div className="produkty">
        </div>
        <div className="produkty">
        </div>
        <div className="produkty">
        </div>
        <div className="produkty">
        </div>
        <div className="produkty">
        </div>
        <div className="produkty">
        </div>
        <div className="produkty">
        </div>
        <div className="produkty">
        </div>                                                        
        </div>
        </div>
        );
    }
}

SingleBreweryPage.propTypes = {
    singleBrewery: PropTypes.object,
    loading: PropTypes.bool,
    fetchSingleBrewery: PropTypes.func,
    match: PropTypes.object
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleBreweryPage);
