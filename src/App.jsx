import { Component } from "react";

import SearchBox from "./componemts/search-box/search-box.component";

import "./App.css";
import CardList from "./componemts/card-list/card-list.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };

    console.log("constructor");
  }

  componentDidMount() {
    console.log("componentDidMount");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          }
        )
      );
  }

  onSearchChange = (event) => {
    console.log(event.target.value);
    const searchField = event.target.value.toLocaleLowerCase();

    this.setState(() => {
      return {searchField}
    })

  }

  render() {

    const {monsters, searchField} = this.state;
    const {onSearchChange} = this; 

    const filteredMonster = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField)
    })

    return (
      <div className="App"> 
        <h1 className="app-title">Chris Monsters</h1>

        <SearchBox onChangeHandler={onSearchChange} placeholder='search monsters' className='monsters-search-box' />

        <div className="card-list-holder">
        <CardList monsters={filteredMonster} />
        </div>
        
      </div>
    );
  }
}

export default App;
