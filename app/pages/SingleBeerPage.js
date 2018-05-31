import React, { Component } from 'react';
import '../styles/single-beer-page.scss';
import '../styles/button.scss';

class SingleBeerPage extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="single-beer-page container">
                <div className="wrapper">
                    <div className="item1">
                        <fieldset className="rating">
                            <legend>Oceń piwo:</legend>
                            <input type="radio" id="star5" name="rating" value="5" /><label htmlFor="star5" title="Świetne!">5 stars</label>
                            <input type="radio" id="star4" name="rating" value="4" /><label htmlFor="star4" title="Dobre">4 stars</label>
                            <input type="radio" id="star3" name="rating" value="3" /><label htmlFor="star3" title="Może być">3 stars</label>
                            <input type="radio" id="star2" name="rating" value="2" /><label htmlFor="star2" title="Słabe">2 stars</label>
                            <input type="radio" id="star1" name="rating" value="1" /><label htmlFor="star1" title="Okropne">1 star</label>
                        </fieldset>
                    </div>
                    <div className="item2">
                        <h1>Harnaś syf największy</h1>
                    </div>
                    <div className="item3">
                        <p>Ogólna ocena piwa:</p>
                        <p>1/5</p>
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
                        <p>Podobne piwa:</p>
                        <div className="podobne-piwo">
                        </div>
                        <div className="podobne-piwo">
                        </div>
                        <div className="podobne-piwo">
                        </div>
                        <div className="podobne-piwo">
                        </div>
                    </div>
                    <div className="item7">
                        <p>Najgorsze piwo na świecie, nigdy nie piłem takiego ścieka, jakie to jest kurwa okropne, jak takie gówno można pić, piwo dla biedaków co ich nie stać na ksiazece tfu kurwa.</p>
                    </div>

                </div>
                <h2>Komentarze:</h2>
                <textarea name="body" className="textarea" type="text"
                    placeholder="Dodaj komentarz..."
                    title="Wpisz miasto"></textarea>
                <button className="dodaj-komentarz">Dodaj komentarz</button>

            </div>
        );
    }
}

export default SingleBeerPage;
