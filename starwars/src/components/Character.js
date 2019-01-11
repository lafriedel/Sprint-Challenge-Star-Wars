import React from 'react';

const Character = props => {
    return (
        <li className="char-name"><h3>{props.char.name}</h3>
        <div>
        <ul className="char-info">
                <li><span>Gender:</span> {props.char.gender}</li>
                <li><span>Eye Color:</span> {props.char["eye_color"]}</li>
                <li><span>Hair Color:</span> {props.char["hair_color"]}</li>
                <li><span># of movie appearances:</span> {props.char.films.length + 1}</li>
            </ul>
        </div>

        </li>
    );
}

export default Character;