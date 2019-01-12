import React from 'react';
import './StarWars.css';

const Pagination = props => {
    return (
        <div className="buttons">
            <button 
                onClick={props.goToPrevPage}
                disabled={props.prevURL ? null : true}
            >
                Previous
            </button>
            <button 
                onClick={props.goToNextPage}
                disabled={props.nextURL ? null : true}
            >
                Next
            </button>
        </div>
    );
}

export default Pagination;