import PropTypes from 'prop-types';
import React, {Component} from 'react';
import '../styles/select.scss';
import '../styles/brewery-base-page.scss';

class BreweriesList extends Component {
    constructor(props) {
        super(props);
    }

    switchPage = (id) => {
        this.props.history.push('/brewery/' + id);
    }

    render() {
        if(this.props.breweries.length === 0) {
            return (
                <div className="brewery-list">
                    <center>Brak wyników wyszukiwania</center>
                </div>
            );
        }
        return (
            <div className="brewery-list">
                <div className="form">
                    <div className="wrapper">
                        {this.props.breweries.map(brewery => {
                            return (
                                <div className="brewery-form">
                        
                            <div className="brewery-wrapper">
                                <div className="image-form">
                                <img src={brewery.photo_URL}/>
                                </div>
                                <div className="info-form">
                                <h1>{brewery.name}</h1>
                                <p> ul.{brewery.street} {brewery.streetNumber}</p><br />
                                <p>{brewery.city}</p>
                                <button className="sprawdz-szczegoly-brewery" onClick={() => this.switchPage(brewery.id)}>Sprawdź szczegóły</button>
                                </div>
                            </div>
                        </div>     
                            );
                        })}   
                    </div>
                </div>
            </div>
        );
    }
}

BreweriesList.propTypes = {
    breweries: PropTypes.array,
    history: PropTypes.object
}

export default BreweriesList;
