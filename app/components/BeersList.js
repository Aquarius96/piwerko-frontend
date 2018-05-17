import PropTypes from 'prop-types';
import React, {Component} from 'react';
import '../styles/select.scss';
import '../styles/beer-base-page.scss';


class BeersList extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="beers-list">
            {this.props.beers.length}
                <div className="select">
                    <select>
                        <option selected value="xD">Sortuj po nazwie</option>
                        <option value="xDD">Malejąco</option>
                        <option value="xDDD">Rosnąco</option>
                    </select>
                </div>
                    <div className="form">
                        <div className="wrapper">
                        {this.props.beers.map(beer => {
                            return (
                            <div className="beer-form">
                            <div className="beer-wrapper">
                                <div className="image-form">
                                    <img src={beer.photo_URL} height="195"/>
                                </div>
                                <div className="info-form">
                                    <h1>{beer.name}</h1>
                                    <p> Alkohol: {beer.alcohol}, IBU: {beer.ibu},</p>
                                    <p> Browar: Kormoran</p>
                                    <p> Ocena: 0,1/5 </p>
                                    <button className="sprawdz-szczegoly">Sprawdź Szczegóły</button>
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
    beers: PropTypes.array
}

export default BeersList;
