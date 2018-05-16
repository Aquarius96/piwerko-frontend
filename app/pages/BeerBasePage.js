import PropTypes from 'prop-types';
import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchBeers, addBeer, deleteBeer, updateBeer } from '../actions/beers';

import '../styles/main.scss';
import Loader from '../components/Loader';

const myBeer = {
    'name': 'harnaś',
    'alcohol': 5.7,
    'ibu': 12,
    'breweryId': 1,
    'servingTemp': 25,
    'type': 'gowno',
    'description': 'zaq',
    'photo_URL': 'X',
    'added_by': 'ja'
}

const updBeer = {
    'id': 20002,
    'name': 'tyskie',
    'alcohol': 5.7,
    'ibu': 12
}

const delBeer = {
    'id': 2
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
        addBeer: beer => dispatch(addBeer(beer)),
        deleteBeer: id => dispatch(deleteBeer(id)),
        updateBeer: beer => dispatch(updateBeer(beer)) 
    };
};

class BeerBasePage extends Component {
    constructor(props) {
        super(props);
        this.add = this.add.bind(this);
        this.state = ({file: ''});
        this.handleImageChange = this.handleImageChange.bind(this);             
    }

    componentDidMount() {
        this.props.fetchBeers();
    }
    add(e) {
        const formData = new FormData();
        e.preventDefault();
        formData.append('file', this.state.file);
        
        
        fetch('http://localhost:8080/api/beer/gowno', {method: 'POST', body: formData}).then(x => x.json()).then(res => console.log(res));
        console.log('handle uploading', this.state.file);
    }

    handleImageChange(e) {
        e.preventDefault();    
        const reader = new FileReader();
        const file = e.target.files[0];    
        reader.onloadend = () => {
            this.setState({
                file: file,
            });
        }    
        reader.readAsDataURL(file)
    }

    render() {
        if(this.props.loading) {
            return <Loader />
        }
        if(!this.props.loading && this.props.error) {
            return (
                <div className="BeerBasePage">
                    <p>Something went wrong. Your data was not loaded properly.</p>
                    <p>{this.props.error}</p>
                </div>
                );
        }
        return (
            <div className="BeerBasePage">
                <p>BeerBasePage works!</p>
                <p>and is fully loaded!</p>
                <p>beers length is {this.props.beers.length}</p>                
                <button onClick = {() => this.props.addBeer(myBeer)}>Click to add beer</button>
                <button onClick = {() => this.props.deleteBeer(delBeer)}>Click to delete beer with id 1</button>
                <button onClick = {() => this.props.updateBeer(updBeer)}>Click to update beer with id 20002</button>
                <form onSubmit={(e)=>this.add(e)}>
                    <input className="fileInput" 
                        type="file" 
                        onChange={(e)=>this.handleImageChange(e)} />
                    <button className="submitButton" 
                        type="submit" 
                        onClick={(e)=>this.add(e)}>Upload Image</button>
                </form>
            </div>
            );
    }
}

BeerBasePage.propTypes = {
    fetchBeers: PropTypes.func,
    addBeer: PropTypes.func,
    deleteBeer: PropTypes.func,
    updateBeer: PropTypes.func,
    beers: PropTypes.array,
    loading: PropTypes.bool,
    error: PropTypes.string
}

export default connect(mapStateToProps, mapDispatchToProps)(BeerBasePage);




