import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './App.css';
import Players from './components/Players';
import Navbar from "./components/Navbar";

class App extends React.Component {
  state = { players: [] };

  componentDidMount() {
    axios.get(`http://localhost:5000/api/players`).then(response => {
      this.setState({ players: response.data });
    })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Navbar />
        </div>
        <Players players={this.state.players} />
      </div>
    );
  }
}

export default App;