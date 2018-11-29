import React, { Component } from 'react';
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import Scores from "./components/Scores"
import GameRules from "./components/GameRules"
import cards from "./cards.json";
import './App.css';





class App extends Component {
  state = {
    cards,
    clicked:[],
    score: 0,
    highScore: 0
  };

  handleClicks = id => {
    if (this.state.clicked.indexOf(id) === -1) { 
      this.handleScore();
      this.setState({ clicked: this.state.clicked.concat(id) });
    } else {
      this.gameOver();
    }
    };
    handleScore = () => {
      console.log(this.state.highScore)
      const updateScore = this.state.score + 1;
      this.setState({
        cards: this.shuffle(cards),
        score: updateScore,
      });
    if (updateScore >= this.state.highScore) {
      this.setState({ highScore: updateScore });
    } else if (updateScore === 12) {
      alert("You win!")
    }
  }
  gameOver = () => {
    this.setState({
      score: 0,
      highScore: this.state.score,
      clicked: [],
      characters: this.shuffle(cards)
    })
    alert("game over");
  }

shuffle = cards => {
  const shuffled = cards.map(a => [Math.random(), a])
    .sort((a, b) => a[0] - b[0])
    .map(a => a[1]);
  return shuffled;
}

 

  render() {
    return (
      <div>
        <Navbar
          score={this.state.score}
          highScore={this.state.highScore}
        />
        <GameRules />
            <Scores
          score={this.state.score}
          highScore={this.state.highScore}
        />

          <div className="row col s3 m4">
            {this.state.cards.map(elem => 
            <Card
              alt={elem.name}
              src={elem.image}
              id={elem.id}
              handleClicks={this.handleClicks}
              handleScore={this.handleScore}
              endGame={this.gameOver}
              score={this.state.score}
              highScore={this.state.handleScore}
              />)}  
          </div>
      </div>
    );
  }
}



  export default App;
