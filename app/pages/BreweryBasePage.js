import PropTypes from 'prop-types';
import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchBreweries, filterBreweries, sortBreweriesByName } from '../actions/breweries';
import Loader from '../components/Loader';
import BreweriesList from '../components/BreweriesList';
import Pagination from '../components/Pagination';
import '../styles/main.scss';
import '../styles/input.scss';

const mapStateToProps = state => {
    return {
        breweries: state.breweriesReducer.filteredBreweries,
        loading: state.breweriesReducer.loading,
        error: state.breweriesReducer.error,
        filterText: state.breweriesReducer.filterText,
        sortType: state.breweriesReducer.sortType
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchBreweries: () => dispatch(fetchBreweries()),
        filterBreweries: text => dispatch(filterBreweries(text)),
        sortBreweriesByName: type => dispatch(sortBreweriesByName(type))
    };
};

class BreweryBasePage extends Component {
    constructor(props) {
        super(props);
        this.state = ({pickedBreweries: [], dataReady: false});             
    }

    componentDidMount() {
        this.props.fetchBreweries();
    }

    componentWillReceiveProps(nextProps) {
        this.pickBreweries(10, nextProps);        
    }

    setWrapperWidth = (length) => {
        document.documentElement.style.setProperty('--rows', Math.round(length / 2));
    }

    pickBreweries = (limit, nextProps) => {        
        const pickedBreweriesArray = [];
        let counter = 0;
        nextProps.breweries.filter((brewery) => brewery.name.indexOf(nextProps.filterText) !== -1).map(brewery => {            
            if(counter >= limit * (nextProps.match.params.page - 1) && counter < limit * nextProps.match.params.page) {                
                pickedBreweriesArray.push(brewery);
            }
            counter++;
        });
        switch(nextProps.sortType) {
            case 'asc':
                pickedBreweriesArray.sort(function(a, b) {return a.name < b.name ? -1 : 1});
                break;
            case 'desc':
                pickedBreweriesArray.sort(function(a, b) {return a.name > b.name ? -1 : 1});
                break;
            default:
                break;
        }
        this.setState({pickedBreweries: pickedBreweriesArray, dataReady: true});
        this.setWrapperWidth(pickedBreweriesArray.length);
    }

    handleTextChange = (e) => {
        this.props.filterBreweries(e.target.value);
    }

    handleSortChange = (e) => {
        this.props.sortBreweriesByName(e.target.value);
    }

    render() {
        if(this.props.loading || !this.state.dataReady) {
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
                <Pagination history={this.props.history} dataLength={this.props.breweries.length} dataPerPage={10} route="/brewerybase/" current ={this.props.match.params.page}/>
                <div className="ustawienie-inputa">
                <input
                  type="text"
                  className="my-input"
                  placeholder="Wyszukaj obiekt..."
                  title="Wpisz miasto"
                  onChange={this.handleTextChange}></input>
              </div>              
                <div className="select">
                    <select onChange={this.handleSortChange}>
                        <option selected value="">Sortuj po nazwie</option>
                        <option value="desc">Malejąco</option>
                        <option value="asc">Rosnąco</option>
                    </select>
                </div>                            
                <BreweriesList history={this.props.history} breweries={this.state.pickedBreweries} page={this.props.match.params.page} />
            </div>
            );
    }
}

BreweryBasePage.propTypes = {
    fetchBreweries: PropTypes.func,
    filterBreweries: PropTypes.func,
    sortBreweriesByName: PropTypes.func,
    breweries: PropTypes.array,
    loading: PropTypes.bool,
    error: PropTypes.string,
    filterText: PropTypes.string,
    sortType: PropTypes.string,
    match: PropTypes.object,
    history: PropTypes.object
}

export default connect(mapStateToProps, mapDispatchToProps)(BreweryBasePage);




