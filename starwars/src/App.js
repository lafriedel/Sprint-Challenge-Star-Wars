import React, { Component } from "react";
import CharacterList from "./components/CharacterList";
import Pagination from './components/Pagination';
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      nextURL: "",
      prevURL: ""
    };
  }

  componentDidMount() {
    this.getCharacters("https://swapi.co/api/people");
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
          nextURL: data.next,
          prevURL: data.previous
        });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  goToNextPage = event => {
    event.preventDefault();
    this.getCharacters(this.state.nextURL);
  };

  goToPrevPage = event => {
    event.preventDefault();
    this.getCharacters(this.state.prevURL);
  };

  render() {
    return (
      <div className="App">
        <h1 className="Header">Star Wars Characters</h1>
        <Pagination
          goToNextPage={this.goToNextPage}
          goToPrevPage={this.goToPrevPage}
          nextURL={this.state.nextURL}
          prevURL={this.state.prevURL}
        />
        <CharacterList
          starwarsChars={this.state.starwarsChars}
          singleChar={this.state.singleChar}
        />

      </div>
    );
  }
}

export default App;
