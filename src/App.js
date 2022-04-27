import { Component } from 'react';
import './App.css';
import CardList from './components/player-cards/card-list';
import SearchBox from './components/search-box/search-box';

class App extends Component {
  // whenever this app is CONSTRUCTED: run super
  constructor() {
    super();

    // state holds what data we want to pass into our HTML/website
    this.state = {
      yankees: [],
      searchField: '',
    };
  }



  componentDidMount() {
    fetch('https://api.sportsdata.io/v3/mlb/scores/json/Players/NYY?key=431b10d85e874e1cba347c11bcc90f41')
      .then((response) => response.json())
      .then((players) =>
        this.setState(
          () => {
            return { yankees: players }
          },
          () => {
            console.log(this.state);
          }
        )
        // setState function method that takes in callback functions
      );
  }



  onSearchChange = (event) => {
    console.log(event.target.value);

    const searchField = event.target.value.toLowerCase();
    this.setState(() => {
      return ({ searchField });
    });
  }




  render() {
    const { yankees, searchField } = this.state;
    const { onSearchChange } = this;

    // always filtering from the original state yankees array
    const filteredYankees = yankees.filter((yankee) => {
      return yankee.FanDuelName?.toLowerCase().includes(searchField);
    });
    // ? allows filter to get rid of any null object.names aka yankees players who are not well known
    

    return (
      <div className="App">
        <h1 className='app-title'>Yankees Player Search ⚾🗽</h1>
        <SearchBox className='yankees-search-bar' onChangeHandler={onSearchChange} placeholder="Search by player names" />
        <CardList yankees={filteredYankees} />
      </div>
    );
  }
}

export default App;