import PropTypes from 'prop-types';
import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchBeers } from '../actions/beers';
import '../styles/main.scss';
import Loader from '../components/Loader';
import BeersList from '../components/BeersList';
import Pagination from '../components/Pagination';

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
        this.state = ({pickedBeers: [], dataReady: false});     
    }

    componentDidMount() {
        this.props.fetchBeers();
    }

    componentWillReceiveProps(nextProps) {
        console.log('this ' + this.props.match.params.page);
        console.log('next ' + nextProps.match.params.page);
        if(this.props.beers !== nextProps.beers || this.props.match.params.page !== nextProps.match.params.page) {
            this.pickBeers(10, nextProps.beers, nextProps.match.params.page);
        }
    }

    setWrapperWidth = (length) => {
        document.documentElement.style.setProperty('--rows', Math.round(length / 2));
    }

    pickBeers = (limit, beers, page) => {        
        const pickedBeersArray = [];
        let counter = 0;
        beers.map(beer => {            
            if(counter >= limit * (page - 1) && counter < limit * page) {                
                pickedBeersArray.push(beer);
            }
            counter++;
        });
        this.setState({pickedBeers: pickedBeersArray, dataReady: true});
        this.setWrapperWidth(pickedBeersArray.length);
    }

    render() {
        if(this.props.loading || !this.state.dataReady) {
            return <Loader />
        }
        if(!this.props.loading && this.props.error) {
            return (
                <div className="BeerBasePage container">
                    <p>Something went wrong. Your data was not loaded properly.</p>
                    <p>{this.props.error}</p>
                </div>
                );
        }
        return (
            <div className="BeerBasePage container">
                <p>BeerBasePage works!</p>
                <p>and is fully loaded!</p>
                <p>These are your beers:</p>
                <p>Strona {this.props.match.params.page}</p>
                <Pagination history={this.props.history} dataLength={this.props.beers.length} dataPerPage={10} route="/beerbase/" current ={this.props.match.params.page}/>                
                <BeersList beers={this.state.pickedBeers} page={this.props.match.params.page} />
            </div>
            );
    }
}

BeerBasePage.propTypes = {
    fetchBeers: PropTypes.func,
    beers: PropTypes.array,
    loading: PropTypes.bool,
    error: PropTypes.string,
    match: PropTypes.object,
    history: PropTypes.object
}

export default connect(mapStateToProps, mapDispatchToProps)(BeerBasePage);




