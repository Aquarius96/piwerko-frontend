import PropTypes from 'prop-types';
import React, {Component} from 'react';

class Pagination extends Component {
    constructor(props) {
        super(props);
    // props to
    // spread = 5, dataLength, dataPerPage, Route
        this.state = ({Links: []});
    }

    componentDidMount() {
        const totalPages = this.calculateTotalPages(this.props.dataLength, this.props.dataPerPage);
        this.calculateLinks(totalPages, parseInt(this.props.current, 10));
    }

    componentDidUpdate(prevProps) {
        if(prevProps !== this.props) {
            const totalPages = this.calculateTotalPages(this.props.dataLength, this.props.dataPerPage);
            this.calculateLinks(totalPages, parseInt(this.props.current, 10));
        }
    }

    calculateTotalPages(count, dataOnPage) {
        if(count % dataOnPage === 0) {
            return Math.floor(count / dataOnPage);
        }
        return Math.floor(count / dataOnPage) + 1;
    }

    calculateLinks(totalPages, currentPage) {
        const array = [];
        let counter = 0;
    
        if(currentPage !== 1) {
            array.push({nr: 1, txt: '<<'});
        }
        if(currentPage > 2) {
            array.push({nr: currentPage - 1, txt: '<'});
        }
        counter++;    
        if(counter < totalPages - 1 && !array.includes(currentPage)) {
            array.push({nr: currentPage, txt: currentPage});
        }    
        if(currentPage < totalPages - 1) {
            array.push({nr: currentPage + 1, txt: '>'});
        }
        if(currentPage < totalPages) {
            array.push({nr: totalPages, txt: '>>'});                
        }    
        this.setState({Links: array});
    }

    switchPage(link) {
        this.props.history.push(link);
    }

    render() {
        return (<div>
        {this.state.Links.map(item => {
            return (                                 
                <button onClick={() => this.switchPage(this.props.route + item.nr)}>{item.txt}</button>               
                    );
        } 
                )}
            </div>);      
    }
}

Pagination.propTypes = {
    dataLength: PropTypes.number,
    dataPerPage: PropTypes.number,
    route: PropTypes.string,
    current: PropTypes.number,
    match: PropTypes.object,
    history: PropTypes.object
}

export default Pagination;
