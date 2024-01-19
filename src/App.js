// import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

// using functions
// functions are used to render static strings
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// using classes
// class gives extra functionality
// render state instead of static string
// component class gives access to set state method which allow to modify state object
class App extends Component {
  constructor() {
    super();

    // set default value
    // internal state
    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  // life cycle methods
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  // write our own class methods with arrow functions
  // use arrow functionson class methods you define that are not part of react
  // like render, etc
  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    //pull properties of state and set it to constants
    const { monsters, searchField } = this.state;
    // filter monster list, return monster name that includes search string
    const filteredMonters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Albie's Monsters Rolodex</h1>
        <SearchBox
          placeholder="search monsters"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonters} />
      </div>
    );
  }
}

export default App;
