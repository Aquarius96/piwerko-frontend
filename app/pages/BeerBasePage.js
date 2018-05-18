import PropTypes from 'prop-types';
import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchBeers, filterBeers } from '../actions/beers';
import Loader from '../components/Loader';
import BeersList from '../components/BeersList';
import Pagination from '../components/Pagination';
import '../styles/main.scss';
import '../styles/input.scss';

const mapStateToProps = state => {
    return {
        beers: state.beersReducer.beers,
        loading: state.beersReducer.loading,
        error: state.beersReducer.error,
        filterText: state.beersReducer.filterText
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchBeers: () => dispatch(fetchBeers()),
        filterBeers: text => dispatch(filterBeers(text))
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
        this.pickBeers(10, nextProps.beers, nextProps.match.params.page, nextProps.filterText);        
    }

    setWrapperWidth = (length) => {
        document.documentElement.style.setProperty('--rows', Math.round(length / 2));
    }

    pickBeers = (limit, beers, page, filterText) => {        
        const pickedBeersArray = [];
        let counter = 0;
        beers.filter((beer) => beer.name.indexOf(filterText) !== -1).map(beer => {            
            if(counter >= limit * (page - 1) && counter < limit * page) {                
                pickedBeersArray.push(beer);
            }
            counter++;
        });
        pickedBeersArray.sort(function(a, b) {return a.name < b.name ? -1 : 1});
        this.setState({pickedBeers: pickedBeersArray, dataReady: true});
        this.setWrapperWidth(pickedBeersArray.length);
    }

    handleTextChange = (e) => {
        this.props.filterBeers(e.target.value);
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
                <p>you searched {this.props.filterText}</p>
                <p>These are your beers:</p>
                <p>Strona {this.props.match.params.page}</p>
                <Pagination history={this.props.history} dataLength={this.props.beers.length} dataPerPage={10} route="/beerbase/" current ={this.props.match.params.page}/>
                <div className="ustawienieInputa">
                <input
                  type="text"
                  id="myInput"
                  placeholder="Wyszukaj obiekt..."
                  title="Wpisz miasto"
                  onChange={this.handleTextChange}></input>
              </div>
              <div className="ustawienieInputa">

                <div className="select">
                    <select>
                        <option selected value="xD">Sortuj po nazwie</option>
                        <option value="xDD">Malejąco</option>
                        <option value="xDDD">Rosnąco</option>
                    </select>
                </div>
                </div>

                <div className="select">
                    <select>
                        <option selected value="xD">Sortuj po ocenie</option>
                        <option value="xDD">Malejąco</option>
                        <option value="xDDD">Rosnąco</option>
                    </select>
                </div>
                <BeersList beers={this.state.pickedBeers} page={this.props.match.params.page} />
            </div>
            );
    }
}

BeerBasePage.propTypes = {
    fetchBeers: PropTypes.func,
    filterBeers: PropTypes.func,
    beers: PropTypes.array,
    loading: PropTypes.bool,
    error: PropTypes.string,
    filterText: PropTypes.string,
    match: PropTypes.object,
    history: PropTypes.object
}

export default connect(mapStateToProps, mapDispatchToProps)(BeerBasePage);




