import PropTypes from 'prop-types';
import React, { Component } from 'react'
import { connect } from 'react-redux';
import Loader from '../components/Loader';
import { confirm } from '../actions/user';

const mapStateToProps = state => {
    return {
        message: state.userReducer.message,
        error: state.userReducer.error,
        loading: state.userReducer.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        confirm: data => dispatch(confirm(data))
    }
}

class ConfirmPage extends Component {
    constructor(props) {
        super(props);         
    }

    componentDidMount() {
        const data = {};
        data.id = this.props.match.params.id;
        data.key = this.props.match.params.code; 
        this.props.confirm(data);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.message) {
            setTimeout(this.props.history.push('/login'), 3000);
        }
    }

    render() {        
        if(this.props.loading) {
            return <Loader /> 
        }
        if(!this.props.loading && this.props.error) {
            return <div>{this.props.error}</div>
        }
        return <div>{this.props.message}</div>
    }
}

ConfirmPage.propTypes = {
    message: PropTypes.string,
    error: PropTypes.string,
    confirm: PropTypes.func,
    loading: PropTypes.bool,
    history: PropTypes.object,
    match: PropTypes.object
}

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmPage);
