import PropTypes from 'prop-types';
import React, {Component} from 'react';
import { connect } from 'react-redux';
import '../styles/header.scss';
import { Link } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import {fetchFavoriteBeers} from '../actions/beers';

const mapStateToProps = state => {
    return {
        loading: state.userReducer.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchFavoriteBeers: (id) => dispatch(fetchFavoriteBeers(id)),        
    };
};

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
           // this.props.fetchFavoriteBeers(user.id);
            console.log(user);
        } else {
            this.setState({user: null});
            console.log('brak usera');
        }        
    }

    logOff = () => {
        localStorage.removeItem('token');
        this.setState({user: null});
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

Header.propTypes = {
    loading: PropTypes.bool,
    fetchFavoriteBeers: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
