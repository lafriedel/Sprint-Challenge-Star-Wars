import React from "react";
import Character from "./Character";
import "./StarWars.css";

const CharacterList = props => {
  return (
    <ul>
      {props.starwarsChars.map((char, index) => {
        return <Character 
            char={char} 
            key={index}
        />
      })}
    </ul>
  );
};

export default CharacterList;
