import React, { Component } from 'react';
import '../styles/admin-page.scss';
import '../styles/button.scss';
import ExpectingBeers from '../components/ExpectingBeers';
import ExpectingBreweries from '../components/ExpectingBreweries';

class AdminPage extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="admin-page container">
                <div className="form1">
                    <div className="item1">
                        <ExpectingBeers/>
                    </div>
                    <div className="item2">
                        <ExpectingBreweries/>
                    </div>
                </div>
            </div>
        );
    }
}

export default AdminPage;
