import React, {Component} from 'react';
import '../styles/add-beer-brewery.scss';
import '../styles/button.scss';


class AddPage extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
        <div className="add-page container">
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
                <img src="https://ocen-piwo.pl/upload/harnas.png" height="360"/>
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
        </div>
        );
    }
}

export default AddPage;
