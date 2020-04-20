import React from "react";
import PlayerCard from "./components/PlayerCard";
import Navbar from "./components/NavBar";
import "./App.css";

class App extends React.Component {
  state = {
    players: [],
  };
  componentDidMount() {
    fetch(`http://localhost:5000/api/players`)
      .then((res) => res.json())
      .then((res) => this.setState({ players: res }))
      .catch((err) => console.log(err));
  }
  render() {
    return (
      <div className="App">
        <Navbar />
        {this.state.players.map((player) => (
          <PlayerCard key={player.id} {...player} />
        ))}
      </div>
    );
  }
}

export default App;
