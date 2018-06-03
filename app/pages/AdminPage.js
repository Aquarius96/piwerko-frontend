import PropTypes from 'prop-types';
import React, {Component} from 'react';
import { connect } from 'react-redux';
import '../styles/admin-page.scss';
import '../styles/button.scss';
import ExpectingBeers from '../components/ExpectingBeers';
import ExpectingBreweries from '../components/ExpectingBreweries';
import UsersList from '../components/UsersList';
import { fetchUnconfirmedBeers, confirmBeer, deleteBeer} from '../actions/beers';
import {fetchUnconfirmedBreweries, confirmBrewery, deleteBrewery} from '../actions/breweries';
import jwtDecode from 'jwt-decode';

const mapStateToProps = state => {
    return {
        unconfirmedBeers: state.beersReducer.unconfirmedBeers,
        unconfirmedBreweries: state.breweriesReducer.unconfirmedBreweries,
        beersLoading: state.beersReducer.loading,
        breweriesLoading: state.breweriesReducer.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUnconfirmedBeers: () => dispatch(fetchUnconfirmedBeers()),
        fetchUnconfirmedBreweries: () => dispatch(fetchUnconfirmedBreweries()),
        confirmBeer: (beer, userId) => dispatch(confirmBeer(beer, userId)),
        confirmBrewery: (brewery, userId) => dispatch(confirmBrewery(brewery, userId)),
        deleteBeer: (beer, userId) => dispatch(deleteBeer(beer, userId)),
        deleteBrewery: (brewery, userId) => dispatch(deleteBrewery(brewery, userId))
    };
};

class AdminPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            toggle: true,
            toggleText: 'Użytkownicy',
            user: null
        }
    }

    componentDidMount() {
        this.props.fetchUnconfirmedBeers();
        this.props.fetchUnconfirmedBreweries();
        this.checkToken();
        // this.confirmBeer(110002);
        // this.confirmBrewery(30002);
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

    confirmBeer = (id) => {        
        const userId = parseInt(this.state.user.id, 10);
        const data = {};
        data.id = id;        
        this.props.confirmBeer(data, userId);
    }

    confirmBrewery = (id) => {
        const userId = parseInt(this.state.user.id, 10);
        const data = {};
        data.id = id;
        this.props.confirmBrewery(data, userId);
    }

    deleteBeer = (id) => {        
        const userId = parseInt(this.state.user.id, 10);
        const data = {};
        data.id = id;        
        this.props.deleteBeer(data, userId);
    }

    deleteBrewery = (id) => {
        const userId = parseInt(this.state.user.id, 10);
        const data = {};
        data.id = id;
        this.props.deleteBrewery(data, userId);
    }

    handleToggle = (e) => {
        e.preventDefault();
        this.state.toggle ?
            this.setState({
                toggleText: 'Piwa i Browary'
            }) :
            this.setState({
                toggleText: 'Użytkownicy'
            })
        this.setState({
            toggle: !this.state.toggle
        })
    }

    render() {
        return (
            <div className="admin-page container">
                <div className="admin-page-button">
                    <button className="admin-toggle-button" onClick={this.handleToggle}>{this.state.toggleText}</button>
                    <button className="admin-toggle-button" onClick={() => this.confirmBrewery(30002)}>akcpetuj</button>
                </div>

                {this.state.toggle ?
                    <div className="form1">
                        <div className="item1">
                            <ExpectingBeers delete={this.deleteBeer} confirm={this.confirmBeer} beers={this.props.unconfirmedBeers}/>                           
                        </div>
                        <div className="item2">
                            <ExpectingBreweries delete={this.deleteBrewery} confirm={this.confirmBrewery} breweries={this.props.unconfirmedBreweries}/>
                        </div>
                    </div> :
                    <div className="form2">
                        <div className="item3">
                            <UsersList/>
                        </div>
                    </div>
                }
            </div>
        );
    }
}

AdminPage.propTypes = {
    unconfirmedBeers: PropTypes.array,
    unconfirmedBreweries: PropTypes,
    fetchUnconfirmedBeers: PropTypes.func,
    fetchUnconfirmedBreweries: PropTypes.func,
    confirmBeer: PropTypes.func,
    confirmBrewery: PropTypes.func,
    deleteBeer: PropTypes.func,
    deleteBrewery: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminPage);
