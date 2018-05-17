import PropTypes from 'prop-types';
import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchBreweries } from '../actions/breweries';
import '../styles/main.scss';
import Loader from '../components/Loader';
import BreweriesList from '../components/BreweriesList';

const mapStateToProps = state => {
    return {
        breweries: state.breweriesReducer.breweries,
        loading: state.breweriesReducer.loading,
        error: state.breweriesReducer.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchBreweries: () => dispatch(fetchBreweries())
    };
};

class BreweryBasePage extends Component {
    constructor(props) {
        super(props);             
    }

    componentDidMount() {
        this.props.fetchBreweries();
    }

    render() {
        if(this.props.loading) {
            return <Loader />
        }
        if(!this.props.loading && this.props.error) {
            return (
                <div className="BreweryBasePage container">
                    <p>Something went wrong. Your data was not loaded properly.</p>
                    <p>{this.props.error}</p>
                </div>
                );
        }
        return (
            <div className="BreweryBasePage container">
                <p>BreweryBasePage works!</p>
                <p>and is fully loaded!</p>
                <p>These are your breweries:</p>
                <BreweriesList breweries={this.props.breweries} />
            </div>
            );
    }
}

BreweryBasePage.propTypes = {
    fetchBreweries: PropTypes.func,
    breweries: PropTypes.array,
    loading: PropTypes.bool,
    error: PropTypes.string
}

export default connect(mapStateToProps, mapDispatchToProps)(BreweryBasePage);




