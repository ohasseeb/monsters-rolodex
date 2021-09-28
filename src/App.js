import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list-component";
import { SearchBox } from "./components/search-box/search-box-component";

class App extends Component {
  constructor() {
    super(); //  calls the constructor method on this component class
    this.state = {
      monsters: [],
      searchField: "",
    }; // End Constructor
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users })); // Semi colon goes on the last .then()
    // .then((response) => console.log(response));
  } // end ComponentDidMount

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };
  render() {
    // Using Destructing  - Allows u to pull properities out of objects and put them into constant variables
    const { monsters, searchField } = this.state;

    /*
    equivalent to const monsters = this.state.monsters;
    */

    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1> Monsters Rolodex</h1>
        <SearchBox
          placeholder="search monsters"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}
export default App;
