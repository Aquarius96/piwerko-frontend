import PropTypes from 'prop-types';
import React, { Component } from 'react'
import { connect } from 'react-redux';
import Loader from '../components/Loader';
import { forgotPassword } from '../actions/user';
import '../styles/LoginPage.scss';
import '../styles/button.scss';

const mapStateToProps = state => {
    return {
        message: state.userReducer.message,
        error: state.userReducer.error,
        loading: state.userReducer.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        forgotPassword: data => dispatch(forgotPassword(data))
    }
}

class ForgotPasswordPage extends Component {
    constructor(props) {
        super(props);         
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const data = {};
        data.id = this.props.match.params.id;
        data.password = e.target.value; 
        data.old_password = this.props.match.params.code;
        this.props.forgotPassword(data);        
    }

    render() {        
        if(this.props.loading) {
            return <Loader /> 
        }
        if(!this.props.loading && this.props.error) {
            return <div>err{this.props.error}</div>
        }
        if(!this.props.loading && this.props.message) {
            return <div>msg{this.props.message}</div>
        }
        return (
        <div className="login-page container">
            <div className="form">
            <form onSubmit={this.handleSubmit}>
                <input name="password" type="text" placeholder="Wpisz nowe hasło..." required/>
                <button className="zaloguj-zarejestruj" onClick={this.handleSubmit}>Zapisz nowe hasło</button>
            </form>            
            </div>
            
        </div>
        );        
    }
}

ForgotPasswordPage.propTypes = {
    message: PropTypes.string,
    error: PropTypes.string,
    forgotPassword: PropTypes.func,
    loading: PropTypes.bool,
    history: PropTypes.object,
    match: PropTypes.object
}

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPasswordPage);
