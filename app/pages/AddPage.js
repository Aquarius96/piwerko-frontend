import React, {Component} from 'react';
import '../styles/add-beer-brewery.scss';
import '../styles/button.scss';
 
 
class AddPage extends Component {
    constructor(props) {
        super(props);
        this.state = ({beer: {}, file: '', formData: {}});        
    }
 
    handleImageChange = (e) => {
        e.preventDefault();    
        const reader = new FileReader();
        const file = e.target.files[0];    
        reader.onloadend = () => {
            this.setState({
                file: file,
                imagePreviewUrl: reader.result
            });
        }    
        reader.readAsDataURL(file);
        const formData = new FormData();
        formData.append('file', this.state.file);
        this.setState({formData: formData});
    }
 
    handleInputChange = (e) => {
        const beer = Object.assign({}, this.state.beer);
        beer[e.target.name] = e.target.value;
        this.setState({beer: beer});
        console.log('dziala');
        console.log(this.state.beer);
    }
 
    render() {
        let {imagePreviewUrl} = this.state;
        let $imagePreview = null;
        if (imagePreviewUrl) {
            $imagePreview = (<img src={imagePreviewUrl} height="360"/>);
        } else {
            $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
        }
        return (
        <div className="add-page container">
            <form onChange={this.handleInputChange}>
            <div className="wrapper">
                <div className="info-form">
                <div className="select">
                    <select>
                        <option selected value="xD">Piwo</option>
                        <option value="xDD">Browar</option>
                    </select>
                </div>
                <input
                  type="text"
                  className="my-input"
                  placeholder="Nazwa"
                  title="Wpisz miasto"
                  ></input>
                  <input
                  type="text"
                  className="my-input"
                  placeholder="Alkohol"
                  title="Wpisz miasto"
                  ></input>
                  <input
                  type="text"
                  className="my-input"
                  placeholder="IBU"
                  title="Wpisz miasto"
                  ></input>
                  <div className="select">
                    <select>
                        <option selected value="xD">Typ Piwa</option>
                        <option value="xDD">Browar</option>
                    </select>
                </div>
                <div className="select">
                    <select>
                        <option selected value="xD">Browar</option>
                        <option value="xDD">Browar</option>
                    </select>
                </div>
                  <input
                  type="text"
                  className="my-input2"
                  placeholder="Temperatura podawania"
                  title="Wpisz miasto"
                  ></input>
                </div>
                <div className="avatar-form">
                <div className="image-form">
                {$imagePreview}
                </div>
                <div className="button-form">
                <button className="wybierz-plik">Wybierz plik z dysku</button>
                </div>
            </div>
            </div>
            <textarea name="body" className="textarea"type="text"
                  placeholder="Dodaj opis piwa..."
                  title="Wpisz miasto"></textarea>
            <div className="add-beer-button-form">
            <button className="dodaj-piwo">Dodaj Piwo</button>     
            </div>
            </form>
        </div>
        );
    }
}
 
export default AddPage;
