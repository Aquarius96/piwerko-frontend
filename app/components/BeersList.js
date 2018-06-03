import PropTypes from 'prop-types';
import React, {Component} from 'react';
import { connect } from 'react-redux';
import '../styles/select.scss';
import '../styles/beer-base-page.scss';
import { fetchSingleBeer } from '../actions/beers';

const mapDispatchToProps = dispatch => {
    return {
        fetchSingleBeer: id => dispatch(fetchSingleBeer(id)),        
    }
}

class BeersList extends Component {
    constructor(props) {
        super(props);
    }

    switchPage = (id) => {                
        this.props.history.push('/beer/' + id);
    }
    
    render() {
        if(this.props.beers.length === 0) {
            return (
                <div className="beers-list">
                    <center>Brak wyników wyszukiwania</center>
                </div>
            );
        }
        return (
            <div className="beers-list">                          
                    <div className="form">
                        <div className="wrapper">
                        {this.props.beers.map(beer => {
                            return (
                            <div className="beer-form">
                            <div className="beer-wrapper">
                                <div className="image-form">
                                    <img src={beer.photo_URL}/>
                                </div>
                                <div className="info-form">
                                    <h1>{beer.name}</h1>
                                    <p> Alkohol: {beer.alcohol}, IBU: {beer.ibu},</p>
                                    <p> Browar: Kormoran</p>
                                    <p> Ocena: {beer.rate !== 0 ? beer.rate + '/5' : 'brak'} </p>
                                    <button className="sprawdz-szczegoly-beer" onClick={() => this.switchPage(beer.id)}>Sprawdź Szczegóły</button>
                                </div>
                            </div>
                        </div>);
                        })}
                        </div>
                    </div>
            </div>
        );
    }
}

BeersList.propTypes = {
    beers: PropTypes.array,
    history: PropTypes.object,
    fetchSingleBeer: PropTypes.func
}

export default connect(null, mapDispatchToProps)(BeersList);
