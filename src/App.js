import React, {Component} from 'react';
import logo from './logo.svg';
import { CardList } from './components/card-list.component'
import { Search } from './components/search/search.component'
import './App.css';


class App extends Component {
  constructor(){
    super();
    this.state = {
      monsters : [
    ],
			searchField: ''
  };
	this.handleChange = this.handleChange.bind(this)
}

componentDidMount(){
	fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users => this.setState({monsters:users}));
}

handleChange(e){
 this.setState({searchField:e.target.value})
}

  render() {
		const {monsters, searchField} = this.state;
		const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
    return(
      <div className="App">
				<Search placeholder = 'search monsters' change = {this.handleChange }/>
				<CardList monsters={filteredMonsters}/>
      </div>
    );
  }
}

export default App;
