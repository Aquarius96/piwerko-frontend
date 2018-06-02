import PropTypes from 'prop-types';
import React, {Component} from 'react';
import { connect } from 'react-redux';
import '../styles/add-beer-brewery.scss';
import '../styles/button.scss';
import { addBeer } from '../actions/beers';
import { fetchBreweries, addBrewery } from '../actions/breweries';
import { changeAvatar } from '../actions/user';
import Loader from '../components/Loader';

const mapStateToProps = state => {
    return {
        breweries: state.breweriesReducer.breweries,
        loading: state.breweriesReducer.loading,
        error: state.breweriesReducer.error,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addBeer: (beer, file, photoAdded) => dispatch(addBeer(beer, file, photoAdded)),
        addBrewery: (brewery, file, photoAdded) => dispatch(addBrewery(brewery, file, photoAdded)),
        fetchBreweries: () => dispatch(fetchBreweries()),
        changeAvatar: file => dispatch(changeAvatar(file))
    }
}

class AddPage extends Component {
    constructor(props) {
        super(props);
        this.state = ({beer: {}, brewery: {}, file: null, formData: {}, showForm: 'beer'});        
    }

    componentDidMount() {
        this.props.fetchBreweries();
    }
 
    handleImageChange = (e) => {            
        const reader = new FileReader();
        const file = e.target.files[0];    
        reader.onloadend = () => {
            this.setState({
                file: file,
                imagePreviewUrl: reader.result
            });
        }    
        reader.readAsDataURL(file);
    }
 
    handleBeerInputChange = (e) => {
        const beer = Object.assign({}, this.state.beer);
        beer[e.target.name] = e.target.value;
        this.setState({beer: beer});
    }

    handleBreweryInputChange = (e) => {
        const brewery = Object.assign({}, this.state.brewery);
        brewery[e.target.name] = e.target.value;
        this.setState({brewery: brewery});
    }

    addBeer = (e) => {
        e.preventDefault();
        const formData = new FormData();        
        formData.append('file', this.state.file);        
        if(this.state.file) {
            this.props.addBeer(this.state.beer, formData, true);
        } else {
            this.props.addBeer(this.state.beer, formData, false);
        }        
    }

    addBrewery = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', this.state.file);
        if(this.state.file) {
            console.log('dz');
            this.props.addBrewery(this.state.brewery, formData, true);
        } else {
            console.log('niedz');
            this.props.addBrewery(this.state.brewery, formData, false);
        }       
    }

    addAvatar = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', this.state.file);
        this.props.changeAvatar(formData);
    }

    handleFormChange = (e) => {
        this.setState({showForm: e.target.value, beer: {}, brewery: {}});
    }

    handleInputs = () => {
        if(this.state.showForm === 'beer') {
            return 'this.handleBeerInputChange';
        } 
        return 'this.handleBreweryInputChange';                
    }
 
    render() {
        let {imagePreviewUrl} = this.state;
        let $imagePreview = null;
        if (imagePreviewUrl) {
            $imagePreview = (<img src={imagePreviewUrl} height="360"/>);
        } else {
            $imagePreview = (<div className="previewText">Wybierz zdjęcie</div>);
        }
        if(this.props.loading) {
            return <Loader />
        }
        if(!this.props.loading && this.props.error) {
            return (
                <div className="AddPage container">
                    <p>Something went wrong. Your data was not loaded properly.</p>
                    <p>{this.props.error}</p>
                </div>
                );
        }
        return (
        <div className="add-page container">
            <form onChange={(this.state.showForm === 'beer') ? this.handleBeerInputChange : this.handleBreweryInputChange}>
            <div className="wrapper">
                <div className="info-form">
                <div className="select">
                    <select onChange={this.handleFormChange}>
                        <option selected value="beer">Piwo</option>
                        <option value="brewery">Browar</option>
                    </select>
                </div>
                {(this.state.showForm === 'beer') ?
                <div className="beerData">
                <input
                  name="name"  
                  type="text"
                  className="my-input"
                  placeholder="Nazwa"
                  title="Wpisz nazwę piwa"
                  ></input>
                  <input
                  name="alcohol"
                  type="text"
                  className="my-input"
                  placeholder="Alkohol"
                  title="Wpisz % alkoholu"
                  ></input>
                  <input
                  name="ibu"
                  type="text"
                  className="my-input"
                  placeholder="IBU"
                  title="Wpisz IBU"
                  ></input>
                  <div className="select">
                    <select name="type">
                        <option selected value="">Typ Piwa</option>
                        <option value="lager">Lager</option>
                        <option value="stout">Stout</option>
                        <option value="ciemne">Ciemne</option>
                    </select>
                </div>
                <div className="select">
                    <select name="breweryId">
                        <option selected value="">Browar</option>
                        {this.props.breweries.map(brewery => {
                            return <option value={brewery.id}>{brewery.name}</option>
                        })}
                        
                    </select>
                </div>
                  <input
                  name="servingTemp"
                  type="text"
                  className="my-input2"
                  placeholder="Temperatura podawania"
                  title="Wpisz miasto"
                  ></input>
                </div> :
                <div className="brewery-data">
                    <input
                  name="name"  
                  type="text"
                  className="my-input"
                  placeholder="Nazwa"
                  title="Wpisz nazwę browaru"
                  ></input>
                  <input
                  name="city"  
                  type="text"
                  className="my-input"
                  placeholder="Miasto"
                  title="Wpisz miasto"
                  ></input>
                  <input
                  name="street"  
                  type="text"
                  className="my-input"
                  placeholder="Ulica"
                  title="Wpisz ulicę"
                  ></input>
                  <input
                  name="streetNumber"  
                  type="text"
                  className="my-input"
                  placeholder="Nr budynku"
                  title="Wpisz nr budynku"
                  ></input>
                    </div>
                }
                
                </div>

                
                
                <div className="avatar-form">
                <div className="image-form">
                {$imagePreview}
                </div>

                <div className="button-form">
                <label htmlFor="file-upload" className="custom-file-upload">Wybierz plik</label>

                <input id="file-upload" 
                        type="file"                    
                        onChange={(e)=>this.handleImageChange(e)} />

                </div>
            </div>
            </div>
            <textarea name="description" className="textarea"type="text"
                  placeholder="Dodaj opis piwa..."
                  title="Wpisz miasto"></textarea>
            <div className="add-beer-button-form">
            {(this.state.showForm === 'beer') ? 
                <button className="dodaj-piwo" onClick={this.addBeer}>Dodaj Piwo</button> :
                <button className="dodaj-piwo" onClick={this.addBrewery}>Dodaj Browar</button>
            }
             <button className="dodaj-piwo" onClick={this.addAvatar}>dodaj avatar test dla dawida</button>           
            </div>
            </form>
        </div>
        );
    }
}

AddPage.propTypes = {
    addBeer: PropTypes.func,
    addBrewery: PropTypes.func,
    breweries: PropTypes.array,
    fetchBreweries: PropTypes.func,
    loading: PropTypes.bool,
    error: PropTypes.string,
    changeAvatar: PropTypes.func
}
 
export default connect(mapStateToProps, mapDispatchToProps)(AddPage);
