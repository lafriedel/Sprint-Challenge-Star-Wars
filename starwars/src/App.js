import React, { Component } from 'react';
import CharacterList from './components/CharacterList';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      singleChar: {},
      nextURL: "",
      prevURL: "",
      currentIndex: 0
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people', 0);
  }

  getCharacters = (URL, index) => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ 
          starwarsChars: data.results, 
          singleChar: data.results[index], 
          nextURL: data.next, 
          prevURL: data.previous
         }, console.log(data.results[index]));
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  // getSingleCharacter = () => {
  //   this.getCharacters(this.state.nextURL);
  // }

  // goToNextChar = () => {
  //   this.setState({
  //     currentIndex: this.state.currentIndex + 1,
  //     singleChar: data.results[this.state.currentIndex + 1]
  //   })
  // }


  render() {
    return (
      <div className="App">
        <h1 className="Header">Star Wars Characters</h1>
        <CharacterList 
          starwarsChars={this.state.starwarsChars}
          singleChar={this.state.singleChar}
          nextURL={this.state.nextURL}
          prevURL={this.state.prevURL}
        />
      </div>
    );
  }
}

export default App;
