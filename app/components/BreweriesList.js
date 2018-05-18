import PropTypes from 'prop-types';
import React, {Component} from 'react';
import '../styles/select.scss';
import '../styles/brewery-base-page.scss';

class BreweriesList extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="brewery-list">
                <div className="form">
                    <div className="wrapper">
                        <div className="brewery-form">
                        <h1>Browar Amber</h1>
                            <div className="brewery-wrapper">
                                <div className="image-form">
                                <img src={'http://przegladhandlowy.pl/wp-content/uploads/2012/05/Browar-Amber.jpg'} width="230"/>
                                </div>
                                <div className="info-form">
                                <p> ul. Browarna 88</p>
                                <p>34-300 Żywiec</p>
                                </div>
                            </div>
                            <button className="sprawdz-szczegoly-brewery">Sprawdź szczegóły</button>
                        </div>        
                    </div>
                </div>
            </div>
        );
    }
}

BreweriesList.propTypes = {
    breweries: PropTypes.array
}

export default BreweriesList;
