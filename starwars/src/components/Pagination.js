import React from 'react';

const Pagination = props => {
    return (
        <div>
            <button onClick={props.goToPrevPage}>Previous</button>
            <button onClick={props.goToNextPage}>Next</button>
        </div>
    );
}

export default Pagination;