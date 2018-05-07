import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainPage from './pages/MainPage';
import AddPage from './pages/AddPage';
import AdminPage from './pages/AdminPage';
import BeerBasePage from './pages/BeerBasePage';
import BreweryBasePage from './pages/BreweryBasePage';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import SingleBeerPage from './pages/SingleBeerPage';
import SingleBreweryPage from './pages/SingleBreweryPage';

export default (
	<Switch>
		<Route exact path="/" component={MainPage} />
		<Route exact path="/add" component= {AddPage} />
		<Route exact path="/admin" component= {AdminPage} />
		<Route exact path="/beerbase" component= {BeerBasePage} />
		<Route exact path="/brewerybase" component= {BreweryBasePage} />
		<Route exact path="/contact" component= {ContactPage} />
		<Route exact path="/login" component= {LoginPage} />
		<Route exact path="/profile" component= {ProfilePage} />
		<Route exact path="/beer" component= {SingleBeerPage} />
		<Route exact path="/brewery" component= {SingleBreweryPage} />
	</Switch>
);
