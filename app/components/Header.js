import React, { Component } from 'react';
import '../styles/header.scss';
import { Link } from 'react-router-dom';
import jwtDecode from 'jwt-decode';


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = ({user: null});
    }

    componentDidMount() {
        console.log('dzialam');
        this.checkToken();        
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps !== this.props) {
            this.checkToken();
        }
    }

    checkToken = () => {
        const token = localStorage.getItem('token');        
        if(token) {
            const user = jwtDecode(token);
            this.setState({user: user});            
            console.log(user);
        } else {
            this.setState({user: null});
            console.log('brak usera');
        }        
    }

    logOff = () => {
        localStorage.removeItem('token');
    }

    render() {
        return (
            <div className="header">
                <nav className="navbar navbar-expand-lg navbar-custom">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <Link className="navbar-brand" to="/">Piwerko</Link>
                        <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">                             
                                <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link className="a nav-link" to="/test"> Test </Link>
                                </li>                                                                                                                            
                                <li className="nav-item">
                                    <Link className="a nav-link" to="/beerbase/1"> Baza Piw </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="a nav-link" to="/brewerybase/1"> Baza Browarów </Link>
                                </li> 
                                {this.state.user ? 
                                <li className="nav-item">
                                    <Link className="a nav-link" to="/add"> Dodaj piwo/browar </Link>
                                </li> : null }                                 
                                <li className="nav-item">
                                    <Link className="a nav-link" to="/contact"> Kontakt </Link>
                                </li>                                                              
                                {this.state.user ? 
                                <li className="nav-item">
                                    <Link className="a nav-link" to="/profile"> Mój profil </Link>
                                </li> : null }
                                <li className="nav-item">
                                <Link className="a nav-link" to="/admin"> Admin </Link>
                                </li>
                                {this.state.user ?
                                <li className="nav-item">
                                    <Link className="a nav-link" to="/" onClick={this.logOff}> Wyloguj się </Link>
                                </li> : null }
                                {!this.state.user ?
                                <li className="nav-item">
                                    <Link className="a nav-link" to="/login"> Logowanie </Link>
                                </li> : null }
                            </ul>                                                                                                                                                                                                
                        </div>
                    </div>
                </nav>

            </div>
        );
    }
}

export default Header;
