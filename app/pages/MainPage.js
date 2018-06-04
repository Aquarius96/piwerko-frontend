import PropTypes from 'prop-types';
import React, {Component} from 'react';
import { connect } from 'react-redux';
import '../styles/main-page.scss';
import Loader from '../components/Loader';
import {fetchTopBeers} from '../actions/beers';

const mapStateToProps = state => {
    return {
        topBeers: state.beersReducer.topBeers,
        loading: state.beersReducer.loading        
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchTopBeers: () => dispatch(fetchTopBeers())       
    };
};

class MainPage extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchTopBeers();
    }

    render() {
        if(this.props.loading) {
            return <Loader />
        }
        let count = 0;
        return (
            <div className="main-page container">
                <h1>Top 100 piw</h1>            
                {this.props.topBeers.map(beer => {
                    count++;
                    return (
                    <div className="beer-form">
                    <div className="wrapper">
                            <div className="item1">
                            <p> {count}</p>
                            </div>
                            <div className="item2">
                            <img src="https://drizly-products2.imgix.net/ci-michelob-ultra-244763edf588f5e5.jpeg?auto=format%2Ccompress&fm=jpeg&q=20" />
                            </div>
                            <div className="item3">
                            <p>{beer.name}</p>
                            </div>
                            <div className="item4">
                            <p>Ocena: {beer.rate}</p>
                            </div>
                    </div>
                    </div>)
                })}                                
            </div>
        );
    }
}

MainPage.propTypes = {
    fetchTopBeers: PropTypes.func,
    topBeers: PropTypes.array,
    loading: PropTypes.bool
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
