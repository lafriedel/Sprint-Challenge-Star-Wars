import React from 'react';

const Character = props => {
    return (
        <li className="char-name">{props.char.name}
            <ul>
                <li>Gender: {props.char.gender}</li>
                <li>Eye Color: {props.char["eye_color"]}</li>
                <li>Hair Color: {props.char["hair_color"]}</li>
                <li># of movie appearances: {props.char.films.length + 1}</li>
            </ul>
        </li>
    );
}

export default Character;