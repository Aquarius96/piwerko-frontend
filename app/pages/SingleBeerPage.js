import PropTypes from 'prop-types';
import React, {Component} from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import '../styles/single-beer-page.scss';
import '../styles/button.scss';
import jwtDecode from 'jwt-decode';
import {fetchSingleRate, addRate, fetchSingleBeer, fetchBeers, addFavoriteBeer, deleteFavoriteBeer, fetchSimilarBeers} from '../actions/beers';
import {addBeerComment, deleteBeerComment, fetchBeerComments} from '../actions/comments';
import Loader from '../components/Loader';

const mapStateToProps = state => {
    return {
        beer: state.beersReducer.singleBeer,
        singleRate: state.beersReducer.singleRate,
        singleBeer: state.beersReducer.singleBeer,
        loading: state.beersReducer.loading,
        favoriteBeers: state.beersReducer.favoriteBeers,
        comments: state.commentsReducer.comments,
        commentsLoading: state.commentsReducer.loading,
        similarBeers: state.beersReducer.similarBeers
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchBeers: () => dispatch(fetchBeers()),
        fetchSingleRate: (data) => dispatch(fetchSingleRate(data)),
        fetchSingleBeer: id => dispatch(fetchSingleBeer(id)),
        addRate: data => dispatch(addRate(data)),
        addFavoriteBeer: data => dispatch(addFavoriteBeer(data)),
        deleteFavoriteBeer: data => dispatch(deleteFavoriteBeer(data)),
        addBeerComment: data => dispatch(addBeerComment(data)),
        deleteBeerComment: data => dispatch(deleteBeerComment(data)),
        fetchBeerComments: id => dispatch(fetchBeerComments(id)),
        fetchSimilarBeers: id => dispatch(fetchSimilarBeers(id))
    }
}

class SingleBeerPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            rateValue: 0,
            comment: {}
        }
    }

    componentDidMount() {
        console.log('to gowno dziala');              
        this.props.fetchSingleBeer(this.props.match.params.id);
        console.log(this.props.match.params.id);
        console.log('sid' + this.props.singleBeer.id);
        this.checkToken();
        this.props.fetchBeerComments(this.props.match.params.id);
        this.props.fetchSimilarBeers(this.props.match.params.id);                                         
    }
    
    

    componentDidUpdate() {
        if(!this.props.loading) {
            document.getElementById('star' + this.props.singleRate).checked = true;
        }
        console.log('fav');
        console.log(this.props.favoriteBeers.filter(beer => beer.id === this.props.singleBeer.id));
    }

    checkToken = () => {
        const token = localStorage.getItem('token');        
        if(token) {
            console.log('jestem tutaj');
            const user = jwtDecode(token);
            this.setState({user: user}, () => {
                const data = {};
                data.userId = parseInt(this.state.user.id, 10);
                data.beerId = this.props.match.params.id;
                console.log(data);        
                this.props.fetchSingleRate(data);
            });                       
            console.log(user);
            console.log(this.state.user);
            if(this.props.singleRate) {
                // document.getElementById('star' + this.props.singleRate).checked = true;
            }            
        } else {
            this.setState({user: null});
            console.log('brak usera');
        }        
    }

    addFavoriteBeer = (e) => {
        e.preventDefault();
        const data = {};
        data.user_id = parseInt(this.state.user.id, 10);
        data.id_beer = this.props.match.params.id;
        this.props.addFavoriteBeer(data);
    }

    deleteFavoriteBeer = (e) => {
        e.preventDefault();
        const data = {};
        data.user_id = parseInt(this.state.user.id, 10);
        data.id_beer = this.props.match.params.id;
        this.props.deleteFavoriteBeer(data);
    }

    handleCommentInput = (e) => {
        e.preventDefault();
        const commentData = Object.assign({}, this.state.comment);
        commentData[e.target.name] = e.target.value;
        this.setState({comment: commentData});
        console.log('komentarz');
        console.log(this.state.comment);         
    }

    addComment = (e) => {
        e.preventDefault();
        const commentData = Object.assign({}, this.state.comment);
        commentData.userId = parseInt(this.state.user.id, 10);
        commentData.beerId = this.props.match.params.id;
        commentData.DateTime = moment().format('YYYY-MM-DD-HH-mm-ss');
        console.log(commentData);
        this.props.addBeerComment(commentData);
    }

    deleteComment = (e) => {        
        e.preventDefault();
    }

    pickRate = (e) => {        
        console.log(document.getElementById(e.target.htmlFor).value);
        const data = {};
        data.userId = parseInt(this.state.user.id, 10);
        data.beerId = this.props.match.params.id;
        data.value = parseInt(document.getElementById(e.target.htmlFor).value, 10);
        this.props.addRate(data);                       
    }

    render() {
        if(this.props.loading && this.props.commentsLoading) {
            return <Loader />
        }
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
                        
                        <h1>{this.props.singleBeer.rate}/5</h1>
                    </div>
                    <div className="item4">
                        <img src={this.props.singleBeer.photo_URL} height="350" />
                    </div>
                    <div className="item5">
                        <p>Alkohol: {this.props.singleBeer.alcohol}</p>
                        <p>IBU: {this.props.singleBeer.ibu}</p>
                        <p>Browar: {this.props.singleBeer.breweryId}</p>
                        <p>Temperatura podawania: {this.props.singleBeer.servingTemp}</p>
                        <p>Typ piwa: {this.props.singleBeer.type}</p>

        </div>
        <div className="item6">        
        {(this.props.favoriteBeers.filter(beer => beer.id === this.props.singleBeer.id).length > 0) ?
            <button className="dodaj-do-ulubionych" onClick={this.deleteFavoriteBeer}>Usuń z ulubionych</button> :
            <button className="dodaj-do-ulubionych" onClick={this.addFavoriteBeer}>Dodaj do ulubionych</button>
        }
        
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
        <form name="comment-form" onChange={this.handleCommentInput}>
        <textarea name="content" className="textarea" type="text"
                  placeholder="Dodaj komentarz..."
                  title="Wpisz treść komentarza"></textarea>
        <button className="dodaj-komentarz" onClick={this.addComment}>Dodaj komentarz</button>
        </form>
        <h3>Komentarze innych użytkowników:</h3>
        <div className="space"></div>

        {this.props.comments.map(comment => {
            return (
<div className="komentarz-pojedynczego-uzytkownika">
            <div className="wrapper-komentarze">
                <div className="user-nickname">
                    <p> Los Marcinos</p>
                    <img src={'https://i.ytimg.com/vi/z5LhNxi1xK8/maxresdefault.jpg'} height="90" width="90" />
                </div>
                <div className="komentarz-uzytkownika">
                    <p>{comment.content}</p>
                </div>
                <div className="ocena-uzytkownika">
                    <p className="p-ocena"> 1</p>
                </div>
                
            </div>
            
        </div>
            );            
        })}
        
        </div>
        );
    }
}

SingleBeerPage.propTypes = {
    beer: PropTypes.object,
    fetchSingleRate: PropTypes.func,
    addRate: PropTypes.func,
    singleRate: PropTypes.number,
    match: PropTypes.object,
    fetchSingleBeer: PropTypes.func,
    singleBeer: PropTypes.object,
    loading: PropTypes.bool,
    fetchBeers: PropTypes.func,
    addFavoriteBeer: PropTypes.func,
    deleteFavoriteBeer: PropTypes.func,
    favoriteBeers: PropTypes.array,
    addBeerComment: PropTypes.func,
    deleteBeerComment: PropTypes.func,
    comments: PropTypes.array,
    fetchBeerComments: PropTypes.func,
    commentsLoading: PropTypes.bool,
    fetchSimilarBeers: PropTypes.func,
    similarBeers: PropTypes.array
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleBeerPage);
