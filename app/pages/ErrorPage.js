import React, {Component} from 'react';
import '../styles/error-page.scss';

class ErrorPage extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
        <div className="error-page container">
            <img src="../app/assets/404.png" className="center"/>
            <div className="info">
                <p>Niestety, ta strona nie istnieje bądź nie masz do niej dostępu.</p>
                <p>Wysłaliśmy naszych najlepszych stażystów, żeby zbadali sprawę.</p>
                <p>Nie dostaną jedzenia, dopóki tego nie wyjaśnią.</p>
            </div>
        </div>
        );
    }
}

export default ErrorPage;
