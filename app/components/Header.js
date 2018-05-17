import React, {Component} from 'react';
import '../styles/header.scss';
import {Link} from 'react-router-dom';


class Header extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="Header">
            
            <nav className="navbar navbar-expand-lg navbar-custom">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <a className="navbar-brand" href="#">Piwerko</a>
                <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">                    
                
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                    <Link className="a nav-link" to="/test"> Test </Link>
                    </li>
                    <li className="nav-item">
                    <Link className="a nav-link" to="/brewerybase"> Baza Browarów </Link>
                    </li>
                    <li className="nav-item">
                    <Link className="a nav-link" to="/beerbase/1"> Baza Piw </Link>
                    </li>
                    <li className="nav-item">
                    <Link className="a nav-link" to="/contact"> Kontakt </Link>
                    </li>
                    <li className="nav-item">
                    <Link className="a nav-link" to="/login"> Logowanie </Link>
                    </li>
                    </ul>
                    </div>
                </div>
                </nav>

            </div>
        );
    }
}

export default Header;
