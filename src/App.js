import React, { Component} from 'react';
import {SearchBox} from './components/search-box/search-box.components'

import {CardList } from './components/card-list/card-list.component'
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state = {
      monsters : [],
      searchFields: ''
    };
  }
  
componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json())
    .then(users => this.setState({monsters: users}));
}
handleChange = e => {
  this.setState({ searchFields: e.target.value});
}

  render(){
    const { monsters, searchFields} =  this.state;
    const filteredMonsters = monsters.filter(monster => 
        monster.name.toLowerCase().includes(searchFields.toLowerCase()))
    return(
    <div className="App">
      <h1>Monster Rolodex</h1>
      <SearchBox
        placeholder='search monsters'
        handleChange = { this.handleChange}
      />
      <CardList monsters={filteredMonsters}/>
    </div>
    )
  }
}

export default App;
