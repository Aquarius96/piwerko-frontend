import PropTypes from 'prop-types';
import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchBeers, addBeer, deleteBeer, updateBeer, fetchSingleBeer, fetchFavoriteBeers, addFavoriteBeer } from '../actions/beers';
import { addBrewery, deleteBrewery, updateBrewery, fetchSingleBrewery } from '../actions/breweries';

import '../styles/main.scss';
import Loader from '../components/Loader';

const myBeer = {
    'user_id': 1,
    'name': 'harnaś',
    'alcohol': 5.7,
    'ibu': 12,
    'breweryId': 1,
    'servingTemp': 25,
    'type': 'gowno',
    'description': 'zaq'
}

const updBeer = {
    'id': 50002,
    'user_id': 1,
    'name': 'harnaś',
    'alcohol': 5.7,
    'ibu': 12,
    'breweryId': 1,
    'servingTemp': 25,
    'type': 'gowno',
    'description': 'zaq',
    'photo_URL': 'http://www.uncommonsnyc.com/wp-content/uploads/2015/06/beer-bottle.png'
}

const myBrewery = {
    'user_id': 1,
    'name': 'browar kormoran',
    'city': 'Olsztyn',
    'street': 'Sloneczna',
    'streetNumber': 15,
    'servingTemp': 25,
    'description': 'robi sie tam piwo',
    'web_Url': 'https://www.kormoran.pl',
}

const updBrewery = {
    'id': 20002,
    'name': 'tyskie',
    'alcohol': 5.7,
    'ibu': 12
}

const delBeer = {
    'id': 20002
}

const favBeer = {
    'user_id': 1,
    'id_beer': 20007
}

const mapStateToProps = state => {
    return {
        beers: state.beersReducer.beers,
        loading: state.beersReducer.loading,
        error: state.beersReducer.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchBeers: () => dispatch(fetchBeers()),
        addBeer: (beer, file) => dispatch(addBeer(beer, file)),
        deleteBeer: id => dispatch(deleteBeer(id)),
        updateBeer: beer => dispatch(updateBeer(beer)),
        addBrewery: brewery => dispatch(addBrewery(brewery)),
        deleteBrewery: id => dispatch(deleteBrewery(id)),
        updateBrewery: brewery => dispatch(updateBrewery(brewery)),
        fetchSingleBeer: id => dispatch(fetchSingleBeer(id)),
        fetchSingleBrewery: id => dispatch(fetchSingleBrewery(id)),
        fetchFavoriteBeers: id => dispatch(fetchFavoriteBeers(id)),
        addFavoriteBeer: (userId, beerId) => dispatch(addFavoriteBeer(userId, beerId))
    };
};

class TestPage extends Component {
    constructor(props) {
        super(props);
        this.add = this.add.bind(this);
        this.state = ({file: '', formData: {}});
        this.handleImageChange = this.handleImageChange.bind(this);             
    }

    componentDidMount() {
        this.props.fetchBeers();
        this.props.fetchFavoriteBeers(1);
        this.props.addFavoriteBeer(favBeer);
    }
    add(e) {
        const formData = new FormData();
        e.preventDefault();
        formData.append('file', this.state.file);
        this.setState({formData: formData});
        
        // fetch('http://localhost:8080/api/beer/gowno', {method: 'POST', body: formData}).then(x => x.json()).then(res => console.log(res));
        console.log('handle uploading', this.state.formData);
    }

    handleImageChange(e) {
        e.preventDefault();    
        const reader = new FileReader();
        const file = e.target.files[0];    
        reader.onloadend = () => {
            this.setState({
                file: file,
                imagePreviewUrl: reader.result
            });
        }    
        reader.readAsDataURL(file)
    }

    render() {
        let {imagePreviewUrl} = this.state;
        let $imagePreview = null;
        if (imagePreviewUrl) {
            $imagePreview = (<img src={imagePreviewUrl} />);
        } else {
            $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
        }
        if(this.props.loading) {
            return <Loader />
        }
        if(!this.props.loading && this.props.error) {
            return (
                <div className="TestPage container">
                    <p>Something went wrong. Your data was not loaded properly.</p>
                    <p>{this.props.error}</p>
                </div>
                );
        }
        return (
            <div className="TestPage container">
                <p>TestPage works!</p>
                {$imagePreview}
                <p>and is fully loaded!</p>
                <p>beers length is {this.props.beers.length}</p>                
                <button onClick = {() => this.props.addBeer(myBeer, this.state.formData)}>Click to add beer</button>
                <button onClick = {() => this.props.deleteBeer(delBeer)}>Click to delete beer with id 1</button>
                <button onClick = {() => this.props.updateBeer(updBeer)}>Click to update beer with id 20002</button>
                <button onClick = {() => this.props.addBrewery(myBrewery, this.state.formData)}>Click to add Brewery</button>
                <button onClick = {() => this.props.deleteBrewery(delBeer)}>Click to delete Brewery with id 1</button>
                <button onClick = {() => this.props.updateBrewery(updBrewery)}>Click to update Brewery with id 20002</button>
                <button onClick = {() => this.props.fetchSingleBeer(20003)}>Click to fetch beer with id 20003</button>
                <button onClick = {() => this.props.fetchSingleBrewery(1)}>Click to fetch brewery with id 1</button>
                <form onSubmit={(e)=>this.add(e)}>
                    <input id="file" className="fileInput" 
                        type="file"                    
                        onChange={(e)=>this.handleImageChange(e)} />
                        <button htmlFor="file">Select file</button>
                    <button className="submitButton" 
                        type="submit" 
                        onClick={(e)=>this.add(e)}>Upload Image</button>
                </form>
            </div>
            );
    }
}

TestPage.propTypes = {
    fetchBeers: PropTypes.func,
    fetchSingleBeer: PropTypes.func,
    fetchFavoriteBeers: PropTypes.func,
    addBeer: PropTypes.func,
    addFavoriteBeer: PropTypes.func,
    deleteBeer: PropTypes.func,
    updateBeer: PropTypes.func,
    addBrewery: PropTypes.func,
    deleteBrewery: PropTypes.func,
    updateBrewery: PropTypes.func,
    fetchSingleBrewery: PropTypes.func,
    beers: PropTypes.array,
    loading: PropTypes.bool,
    error: PropTypes.string
}

export default connect(mapStateToProps, mapDispatchToProps)(TestPage);




