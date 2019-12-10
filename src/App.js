import React, {Component} from 'react';
import logo from './logo.svg';
import { CardList } from './components/card-list.component'
import './App.css';


class App extends Component {
  constructor(){
    super();
    this.state = {
      monsters : [
    ]
  };
}

componentDidMount(){
	fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users => this.setState({monsters:users}));
}

  render() {
    return(
      <div className="App">
				<CardList name='penny'>
				  <h1>Child</h1>
					{ this.state.monsters.map(monster => (<h1 key={ monster.id } >{ monster.name }</h1>)) }
				</CardList>
      </div>
    );
  }
}

export default App;
