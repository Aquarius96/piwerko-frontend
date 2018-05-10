import * as types from './types';


export function filterTable(filter) {
    return {
        type: types.FILTER,
        filter
    };
}

export function fetchBeers() {
    const data = [];
    fetch('http://localhost:8080/api/beer/get/unconfirmed', {
        method: 'GET',
        mode: 'no-cors'
    })
    .catch(function(error) {
        console.log('Request failed', error);
    })
        .then(x => x.json())
        .then(res => console.log('wynik' + res))
        .then(response => {
            Object.keys(response)
            .forEach(function(key) {
                data.push(response[key]);
            });
        });
    return {
        type: types.FETCH_BEERS_DATA,
        data
    };
}
