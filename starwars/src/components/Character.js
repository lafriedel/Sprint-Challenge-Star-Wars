import React from 'react';

const Character = props => {
    return (
        <li className="char-name">{props.char.name}</li>
    )
}

export default Character;