import PropTypes from 'prop-types';
import React, {Component} from 'react';
import { connect } from 'react-redux';
import '../styles/single-beer-page.scss';
import '../styles/button.scss';
import jwtDecode from 'jwt-decode';
import {fetchSingleRate, addRate} from '../actions/beers';

const mapStateToProps = state => {
    return {
        beer: state.beersReducer.singleBeer,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchSingleRate: (data) => dispatch(fetchSingleRate(data)),
        addRate: data => dispatch(addRate(data))
    }
}

class SingleBeerPage extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.checkToken();
        const data = {};
        const data1 = {};
        data.userId = 1;
        data.beerId = 70002;
        data1.userId = 2;
        data1.beerId = 70002;
        data1.value = -145230; 
        this.props.fetchSingleRate(data);
        this.props.addRate(data1);
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

    pickRate = (e) => {        
        console.log(document.getElementById(e.target.htmlFor).value);
    }

    render() {
        return (
            <div className="single-beer-page container">
                <div className="wrapper">
                    <div className="item1">
                        <fieldset className="rating">
                            <legend>Oceń piwo:</legend>
                            <input type="radio" id="star5" name="rating" value="5" /><label htmlFor="star5" title="Świetne!" onClick={this.pickRate}>5 stars</label>
                            <input type="radio" id="star4" name="rating" value="4" /><label htmlFor="star4" title="Dobre" onClick={this.pickRate}>4 stars</label>
                            <input type="radio" id="star3" name="rating" value="3" /><label htmlFor="star3" title="Może być" onClick={this.pickRate}>3 stars</label>
                            <input type="radio" id="star2" name="rating" value="2" /><label htmlFor="star2" title="Słabe" onClick={this.pickRate}>2 stars</label>
                            <input type="radio" id="star1" name="rating" value="1" /><label htmlFor="star1" title="Okropne" onClick={this.pickRate}>1 star</label>
                        </fieldset>
                    </div>
                    <div className="item2">
                        <h1>Harnaś syf największy</h1>
                    </div>
                    <div className="item3">
                        
                        <h1>1/5</h1>
                    </div>
                    <div className="item4">
                        <img src="https://ocen-piwo.pl/upload/harnas.png" height="350" />
                    </div>
                    <div className="item5">
                        <p>Alkohol:</p>
                        <p>IBU:</p>
                        <p>Browar:</p>
                        <p>Temperatura podawania:</p>
                        <p>Typ piwa:</p>

        </div>
        <div className="item6">
        <button className="dodaj-do-ulubionych">Dodaj do ulubionych</button>
        <p>Podobne piwa:</p>
        <div className="podobne-piwo">
        </div>
        <div className="podobne-piwo">
        </div>
        <div className="podobne-piwo">
        </div>
        </div>
        <div className="item7">
        <p>Najgorsze piwo na świecie, nigdy nie piłem takiego ścieka, jakie to jest okropne, jak takie gówno można pić, piwo dla biedaków co ich nie stać na ksiazece tfu.</p>
        </div> 

        </div>
        <h2>Co sądzisz o tym piwie?</h2>
        <textarea name="body" className="textarea"type="text"
                  placeholder="Dodaj komentarz..."
                  title="Wpisz miasto"></textarea>
        <button className="dodaj-komentarz">Dodaj komentarz</button>
        
        <h3>Komentarze innych użytkowników:</h3>
        <div className="space"></div>

        <div className="komentarz-pojedynczego-uzytkownika">
        <div className="wrapper-komentarze">
        <div className="user-nickname">
        <p> Los Marcinos</p>
        <img src={'https://i.ytimg.com/vi/z5LhNxi1xK8/maxresdefault.jpg'} height="90" width="90" />
        </div>
        <div className="komentarz-uzytkownika">
        <p> ale to piwo jest mierne matkoooo ale to piwo jest mierne matkoooo ale to piwo jest mierne matkoooo ale to piwo jest mierne matkoooo ale to piwo jest mierne matkoooo ale to piwo jest mierne matkoooo ale to piwo jest mierne matkoooo ale to piwo jest mierne matkoooo  </p>
        </div>
        <div className="ocena-uzytkownika">
        <p className="p-ocena"> 1</p>
        </div>
        </div>
        </div>
        
        </div>
        );
    }
}

SingleBeerPage.propTypes = {
    beer: PropTypes.object,
    fetchSingleRate: PropTypes.func,
    addRate: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleBeerPage);
