import React, { Component } from 'react';
import { CardList } from './Components/card-list/card-list.component';
import { SearchBox } from './Components/SearchBox/SearchBox.components';
//import logo from './logo.svg';
import './App.css';

class App extends Component{
  constructor(){
    super();

    this.state = {
      monstors: [],
      searchField: ''
    };
  }
// dynamically calling data from server link
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users') // fetching the link 
     .then(response => response.json())                 // taking the response and converting it into json format so tht js can understand
    .then(users => this.setState({monstors: users})); // take user names and put it in mostors array
   
  }

  //arrow function
  handleChange = e => {
     this.setState({searchField: e.target.value}); //the => arrow function automatically binds 'this' to the handleChange function without using this.handleChange.bind(this)
  }

  render(){
  // destructoring 
    const {monstors, searchField} = this.state;    //duplicating original array coz we do not want to touch the original array
    const filteredMonstors = monstors.filter(m => m.name.toLowerCase().includes(searchField.toLowerCase()));

  return (
    <div className="App">
      <h1>Monstors Rolodex</h1>
      <SearchBox placeholder = 'Search Mosntor'
                 handleChange = {this.handleChange}/>
      <CardList monstors = {filteredMonstors}/>  
    </div>
  )
  }

}
/* function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
           Hello
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}  */

export default App;
