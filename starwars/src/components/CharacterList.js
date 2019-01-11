import React from "react";
import Character from "./Character";
import "./StarWars.css";

const CharacterList = props => {
  
  return (
    <section className="character-list">
      <ul>
        {props.starwarsChars.map((char, index) => {
          return <Character char={char} key={index} />;
        })}
        
        {/* <a href={props.nextURL}>Next</a> */}
      </ul>
    </section>
  );
};

export default CharacterList;
