import * as types from '../types/index';
import axios from 'axios';

export function fetchBeersBegin() {
    return {
        type: types.FETCH_BEERS_DATA_BEGIN
    }
}

export function fetchBeersSuccess(beers) {
    return {
        type: types.FETCH_BEERS_DATA_SUCCESS,
        payload: {beers}
    }
}

export function fetchBeersFailure(error) {
    return {
        type: types.FETCH_BEERS_DATA_FAILURE,
        payload: {error}
    }
}

export function fetchBeers() {
    return function action(dispatch) {
        dispatch(fetchBeersBegin());
        return axios.get('http://localhost:8080/api/beer/get/confirmed')
            .then(response => {
                console.log(response.data);
                const arr = [];                
                for(let i = 0; i < response.data.length; i++) {
                    arr.push(response.data[i].beer);
                    arr[i].rate = response.data[i].rate;
                    arr[i].breweryName = response.data[i].name;
                }
                console.log(arr);
                dispatch(fetchBeersSuccess(arr));
            })
            .catch(error => {
                dispatch(fetchBeersFailure(error.message));
            });
    }
}

export function fetchFavoriteBeersBegin() {
    return {
        type: types.FETCH_FAVORITE_BEERS_DATA_BEGIN
    }
}

export function fetchFavoriteBeersSuccess(beers) {
    return {
        type: types.FETCH_FAVORITE_BEERS_DATA_SUCCESS,
        payload: {beers}
    }
}

export function fetchFavoriteBeersFailure(error) {
    return {
        type: types.FETCH_FAVORITE_BEERS_DATA_FAILURE,
        payload: {error}
    }
}

export function fetchFavoriteBeers(id) {
    return function action(dispatch) {
        dispatch(fetchFavoriteBeersBegin());
        return axios.get('http://localhost:8080/api/Favorite/find/' + id)
            .then(response => {
                console.log(response.data);                            
                dispatch(fetchFavoriteBeersSuccess(response.data));
            })
            .catch(error => {
                dispatch(fetchFavoriteBeersFailure(error));
            });
    }
}

export function fetchSingleBeerBegin() {
    return {
        type: types.FETCH_SINGLE_BEER_BEGIN
    }
}

export function fetchSingleBeerSuccess(beer) {
    return {
        type: types.FETCH_SINGLE_BEER_SUCCESS,
        payload: {beer}
    }
}

export function fetchSingleBeerFailure(error) {
    return {
        type: types.FETCH_SINGLE_BEER_FAILURE,
        payload: {error}
    }
}

export function fetchSingleBeer(id) {
    return function action(dispatch) {
        dispatch(fetchSingleBeerBegin());
        return axios.get('http://localhost:8080/api/beer/getbyid/' + id)
            .then(response => {
                console.log(response.data);
                let newBeer = {};
                newBeer = response.data.beer;
                newBeer.rate = response.data.rate;                
                console.log('new beer is');
                console.log(newBeer);
                dispatch(fetchSingleBeerSuccess(newBeer));
            })
            .catch(error => {
                dispatch(fetchSingleBeerFailure(error.response.data));
            });
    }
}

export function addBeerBegin() {
    return {
        type: types.ADD_BEER_BEGIN
    }
}

export function addBeerSuccess(beer, message) {
    return {
        type: types.ADD_BEER_SUCCESS,
        payload: {beer, message}
    }
}

export function addBeerFailure(error) {
    return {
        type: types.ADD_BEER_FAILURE,
        payload: {error}
    }
}



export function addBeer(beer, file, photoAdded, username) {
    return function action(dispatch) {
        dispatch(addBeerBegin());        
        return axios.post('http://localhost:8080/api/beer/add', beer, {headers: {'Content-Type': 'application/json', 'username': username}})
        .then(res => {                 
            if(photoAdded) {
                axios.post('http://localhost:8080/api/beer/addphoto/' + res.data.id, file, {headers: {'Content-Type': 'application/json', 'username': username}})
            .then(response => {                
                dispatch(addBeerSuccess(response.data, 'Pomyślnie dodano piwo do bazy. Po zatwierdzeniu przez administratora pojawi się na stronie.'));
            }
            )
            .catch(error => dispatch(addBeerFailure(error.response.data)))
            } else {
                dispatch(addBeerSuccess(res.data, 'Pomyślnie dodano piwo do bazy. Po zatwierdzeniu przez administratora pojawi się na stronie.'));
            }           
        })        
        .catch(error => {            
            dispatch(addBeerFailure(error.response.data));
        })
    }
}

export function addFavoriteBeerBegin() {
    return {
        type: types.ADD_FAVORITE_BEER_BEGIN
    }
}

export function addFavoriteBeerSuccess(beer, message) {
    return {
        type: types.ADD_FAVORITE_BEER_SUCCESS,
        payload: {beer, message}
    }
}

export function addFavoriteBeerFailure(error) {
    return {
        type: types.ADD_FAVORITE_BEER_FAILURE,
        payload: {error}
    }
}

export function addFavoriteBeer(data) {
    return function action(dispatch) {
        dispatch(addFavoriteBeerBegin());        
        return axios.post('http://localhost:8080/api/Favorite/add', data)
        .then(response => dispatch(addFavoriteBeerSuccess(response.data)))
        .catch(error => {
            console.log('err' + error);
            console.log('resp' + error.response.data);
            console.log('req' + error.request);
            dispatch(addFavoriteBeerFailure(error.response.data));
        })
    }
}

export function deleteFavoriteBeerBegin() {
    return {
        type: types.DELETE_FAVORITE_BEER_BEGIN
    }
}

export function deleteFavoriteBeerSuccess(beer) {
    return {
        type: types.DELETE_FAVORITE_BEER_SUCCESS,
        payload: {beer}
    }
}

export function deleteFavoriteBeerFailure(error) {
    return {
        type: types.DELETE_FAVORITE_BEER_FAILURE,
        payload: {error}
    }
}

export function deleteFavoriteBeer(data) {
    return function action(dispatch) {
        dispatch(deleteFavoriteBeerBegin());        
        return axios.post('http://localhost:8080/api/Favorite/del', data)
        .then(response => dispatch(deleteFavoriteBeerSuccess(response.data)))
        .catch(error => {
            console.log('err' + error);
            console.log('resp' + error.response.data);
            console.log('req' + error.request);
            dispatch(deleteFavoriteBeerFailure(error.response.data));
        })
    }
}

export function deleteBeerBegin() {
    return {
        type: types.DELETE_BEER_BEGIN
    }
}

export function deleteBeerSuccess(id) {
    return {
        type: types.DELETE_BEER_SUCCESS,
        payload: {id}
    }
}

export function deleteBeerFailure(error) {
    return {
        type: types.DELETE_BEER_FAILURE,
        payload: {error}
    }
}

export function deleteBeer(beer, userId) {
    return function action(dispatch) {
        console.log('srid');
        console.log(userId);
        dispatch(deleteBeerBegin());
        return axios.post('http://localhost:8080/api/beer/delete', beer, {headers: {'Content-Type': 'application/json', 'user_id': userId}})
        .then(() => dispatch(deleteBeerSuccess(beer.id)))
        .catch(error => {
            dispatch(deleteBeerFailure(error.response.data));
        })
    }
}

export function updateBeerBegin() {
    return {
        type: types.UPDATE_BEER_BEGIN
    }
}

export function updateBeerSuccess(beer) {
    return {
        type: types.UPDATE_BEER_SUCCESS,
        payload: {beer}
    }
}

export function updateBeerFailure(error) {
    return {
        type: types.UPDATE_BEER_FAILURE,
        payload: {error}
    }
}

export function updateBeer(beer) {
    return function action(dispatch) {
        dispatch(updateBeerBegin());
        return axios.put('http://localhost:8080/api/beer/update', beer)
        .then(() => dispatch(updateBeerSuccess(beer)))
        .catch(error => {
            dispatch(updateBeerFailure(error.message));
        })
    }
}

export function filterBeers(text) {
    return {
        type: types.FILTER_BEERS,
        payload: {text}
    }
}

export function sortBeersByName(sortType) {
    return {
        type: types.SORT_BEERS_BY_NAME,
        payload: {sortType}
    }
}

export function fetchSingleRateBegin() {
    return {
        type: types.FETCH_SINGLE_RATE_BEGIN        
    }
}

export function fetchSingleRateSuccess(rate) {
    return {
        type: types.FETCH_SINGLE_RATE_SUCCESS,
        payload: {rate}
    }
}

export function fetchSingleRateFailure(error) {
    return {
        type: types.FETCH_SINGLE_RATE_FAILURE,
        payload: {error}
    }
}

export function fetchSingleRate(data) { // userId, beerId
    console.log('dziala');
    return function action(dispatch) {
        dispatch(fetchSingleRateBegin());
        return axios.post('http://localhost:8080/api/rate/getrate', data)
        .then((response) => dispatch(fetchSingleRateSuccess(response.data)))
        .catch(error => {
            dispatch(fetchSingleRateFailure(error.response.data));
        })
    }
}

export function addRateBegin() {
    return {
        type: types.ADD_RATE_BEGIN        
    }
}

export function addRateSuccess(data, rateValue) {
    return {
        type: types.ADD_RATE_SUCCESS,
        payload: {data, rateValue}
    }
}

export function addRateFailure(error) {
    return {
        type: types.ADD_RATE_FAILURE,
        payload: {error}
    }
}

export function addRate(data) { // beerId, userId, value
    return function action(dispatch) {
        dispatch(addRateBegin());
        return axios.post('http://localhost:8080/api/rate/test', data)
        .then((response) => dispatch(addRateSuccess(response.data, data.value)))        
        .catch(error => {
            dispatch(addRateFailure(error));
        })
    }
}

export function fetchSimilarBeersBegin() {
    return {
        type: types.FETCH_SIMILAR_BEERS_BEGIN
    }
}

export function fetchSimilarBeersSuccess(beers) {
    return {
        type: types.FETCH_SIMILAR_BEERS_SUCCESS,
        payload: {beers}
    }
}

export function fetchSimilarBeersFailure(error) {
    return {
        type: types.FETCH_SIMILAR_BEERS_FAILURE,
        payload: {error}
    }
}

export function fetchSimilarBeers(beerId) {
    return function action(dispatch) {
        dispatch(fetchSimilarBeersBegin());
        return axios.get('http://localhost:8080/api/beer/get/similary/' + beerId)
            .then(response => {
                console.log(response.data);                
                dispatch(fetchSimilarBeersSuccess(response.data));
            })
            .catch(error => {
                dispatch(fetchSimilarBeersFailure(error));
            });
    }
}

export function fetchUnconfirmedBeersBegin() {
    return {
        type: types.FETCH_UNCONFIRMED_BEERS_BEGIN
    }
}

export function fetchUnconfirmedBeersSuccess(beers) {
    return {
        type: types.FETCH_UNCONFIRMED_BEERS_SUCCESS,
        payload: {beers}
    }
}

export function fetchUnconfirmedBeersFailure(error) {
    return {
        type: types.FETCH_UNCONFIRMED_BEERS_FAILURE,
        payload: {error}
    }
}

export function fetchUnconfirmedBeers() {
    return function action(dispatch) {
        dispatch(fetchUnconfirmedBeersBegin());
        return axios.get('http://localhost:8080/api/beer/get/unconfirmed/')
            .then(response => {
                console.log('beeeers');
                console.log(response.data);
                const arr = [];                
                for(let i = 0; i < response.data.length; i++) {
                    arr.push(response.data[i].beer);                    
                    arr[i].breweryName = response.data[i].name;
                }
                console.log(arr);                
                dispatch(fetchUnconfirmedBeersSuccess(arr));
            })
            .catch(error => {
                dispatch(fetchUnconfirmedBeersFailure(error.response.data));
            });
    }
}

export function confirmBeerBegin() {
    return {
        type: types.CONFIRM_BEER_BEGIN
    }
}

export function confirmBeerSuccess(id) {
    return {
        type: types.CONFIRM_BEER_SUCCESS,
        payload: {id}
    }
}

export function confirmBeerFailure(error) {
    return {
        type: types.CONFIRM_BEER_FAILURE,
        payload: {error}
    }
}

export function confirmBeer(beer, userId) {
    return function action(dispatch) {
        dispatch(confirmBeerBegin());
        return axios.post('http://localhost:8080/api/beer/confirm', beer, {headers: {'Content-Type': 'application/json', 'user_id': userId}})
        .then(() => dispatch(confirmBeerSuccess(beer.id)))
        .catch(error => {
            dispatch(confirmBeerFailure(error.response.data));
        })
    }
}



