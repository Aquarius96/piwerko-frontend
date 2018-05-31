import React, {Component} from 'react';
import '../styles/single-brewery-page.scss';

class SingleBreweryPage extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
        <div className="single-brewery-page container">
        <h1>Browar Kormoran</h1>
        <div className="wrapper">
        <div className="item1">
        <img src="http://www.interservis.pl/wp-content/uploads/2016/03/Beznazwy-4.jpg" height="150" width="250"/>
        </div>
        <div className="item2">
        <p>Miasto:</p>
        <p>Ulica:</p>
        <p>Nr budynku:</p>
        <p>Strona www:</p>
        </div>
        <div className="item3">
        <p>Tu bedzie mapka google</p>
        </div>
        <div className="item4">
        <p className="p-opis-browaru">A tu bedzie opis browaru</p>
        </div>
        </div>
        
        <h1>Produkty</h1>
        <div className="produkty-wrapper">
        <div className="produkty"></div>
        <div className="produkty"></div>
        <div className="produkty"></div>
        <div className="produkty"></div>
        <div className="produkty"></div>
        <div className="produkty"></div>
        <div className="produkty"></div>
        <div className="produkty"></div>
        <div className="produkty"></div>

        
        
        
        
        
        
        
        </div>
        </div>
        );
    }
}

export default SingleBreweryPage;
