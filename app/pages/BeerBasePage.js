import PropTypes from 'prop-types';
import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchBeers } from '../actions/index';
import '../styles/main.scss';



const mapDispatchToProps = dispatch => {
    return {
        fetchBeers: () => dispatch(fetchBeers()) 
    };
};

class BeerBasePage extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchBeers();
    }

    
    render() {
        return (
        <div className="BeerBasePage">BeerBasePage works!
        <button className="btn btn-danger" >przycisk</button>
        </div>
        
        
        );
    }
}

BeerBasePage.propTypes = {
    fetchBeers: PropTypes.func
}
export default connect(null, mapDispatchToProps)(BeerBasePage);




