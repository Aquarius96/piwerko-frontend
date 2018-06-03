import PropTypes from 'prop-types';
import React, {Component} from 'react';
import { connect } from 'react-redux';
import '../styles/admin-page.scss';
import '../styles/button.scss';
import ExpectingBeers from '../components/ExpectingBeers';
import ExpectingBreweries from '../components/ExpectingBreweries';
import UsersList from '../components/UsersList';
import { fetchUnconfirmedBeers} from '../actions/beers';


const mapStateToProps = state => {
    return {
        unconfirmedBeers: state.beersReducer.unconfirmedBeers,
        
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUnconfirmedBeers: () => dispatch(fetchUnconfirmedBeers()),
        
    };
};

class AdminPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            toggle: true,
            toggleText: 'Użytkownicy'
        }
    }

    componentDidMount() {
        this.props.fetchUnconfirmedBeers();
        // this.props.fetchUnconfirmedBreweries();
    }

    handleToggle = (e) => {
        e.preventDefault();
        this.state.toggle ?
            this.setState({
                toggleText: 'Piwa i Browary'
            }) :
            this.setState({
                toggleText: 'Użytkownicy'
            })
        this.setState({
            toggle: !this.state.toggle
        })
    }

    render() {
        return (
            <div className="admin-page container">
                <div className="admin-page-button">
                    <button className="admin-toggle-button" onClick={this.handleToggle}>{this.state.toggleText}</button>
                </div>

                {this.state.toggle ?
                    <div className="form1">
                        <div className="item1">
                            <ExpectingBeers />
                        </div>
                        <div className="item2">
                            <ExpectingBreweries />
                        </div>
                    </div> :
                    <div className="form2">
                        <div className="item3">
                            <UsersList/>
                        </div>
                    </div>
                }
            </div>
        );
    }
}

AdminPage.propTypes = {
    unconfirmedBeers: PropTypes.array,
    unconfirmedBreweries: PropTypes,
    fetchUnconfirmedBeers: PropTypes.func,
    fetchUnconfirmedBreweries: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminPage);
