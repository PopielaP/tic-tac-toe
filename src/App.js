import React, { Component } from 'react';
import './App.css';
//import './index.css'

class Cell extends Component {
  render() {
    return(
      <div className="cell" onClick={this.props.setValue}>{this.props.checkValue}</div>
    )
  }
}

class Rows extends Component {
  constructor() {
    super()

    this.state = {
      cells: Array(9),
      previousClick: 'O',
      winner: 'Nobody'
    };
  }

  whosWinner(x) {
    const cells = this.state.cells
    let winner = this.state.winner
    if ((cells[0] === 'X' && cells[1] === 'X' && cells[2] === 'X') ||
        (cells[3] === 'X' && cells[4] === 'X' && cells[5] === 'X') ||
        (cells[6] === 'X' && cells[7] === 'X' && cells[8] === 'X') ||
        (cells[0] === 'X' && cells[3] === 'X' && cells[6] === 'X') ||
        (cells[1] === 'X' && cells[4] === 'X' && cells[7] === 'X') ||
        (cells[2] === 'X' && cells[5] === 'X' && cells[8] === 'X') ||
        (cells[0] === 'X' && cells[4] === 'X' && cells[8] === 'X') ||
        (cells[2] === 'X' && cells[4] === 'X' && cells[6] === 'X')) {
      winner = 'X'
    }

    else if ((cells[0] === 'O' && cells[1] === 'O' && cells[2] === 'O') ||
        (cells[3] === 'O' && cells[4] === 'O' && cells[5] === 'O') ||
        (cells[6] === 'O' && cells[7] === 'O' && cells[8] === 'O') ||
        (cells[0] === 'O' && cells[3] === 'O' && cells[6] === 'O') ||
        (cells[1] === 'O' && cells[4] === 'O' && cells[7] === 'O') ||
        (cells[2] === 'O' && cells[5] === 'O' && cells[8] === 'O') ||
        (cells[0] === 'O' && cells[4] === 'O' && cells[8] === 'O') ||
        (cells[2] === 'O' && cells[4] === 'O' && cells[6] === 'O')) {
      winner = 'O'
    }

    this.setState ({
      winner: winner
    })
    console.log(winner)
  }

  cellClick(x) {
    const cells = this.state.cells
    let previousClick = this.state.previousClick
    const winner = this.state.winner
    console.log(cells)
    console.log(previousClick)
    if (cells[x] !== 'X' && cells[x] !== 'O' && winner === 'Nobody') {
      console.log(cells[x])
      if (previousClick === 'X') {
        cells[x] = 'O'
        this.whosWinner(x)
        previousClick = 'O'
      }
      else {
        cells[x] = 'X'
        this.whosWinner(x)
        previousClick = 'X'
      }
    }
    console.log(previousClick)
    console.log(cells)
    this.setState({
      cells: cells,
      previousClick: previousClick
    })
  }

  createCell(x) {
      return <Cell  setValue={() => this.cellClick(x)}  checkValue={this.state.cells[x]}/>
  }

  render() {
    let player = this.state.previousClick
    let winner = this.state.winner

    if (winner === 'X' || winner === 'O') {
      winner = "The winner is " + winner
    }
    else {
      winner = ""
    }

    if (player==='X') {player='O'} else {player='X'}
    player = "Next player: " + player
    return(
      <div>
        <div className="row">
          {this.createCell(0)}
          {this.createCell(1)}
          {this.createCell(2)}
        </div>
        <div className="row">
          {this.createCell(3)}
          {this.createCell(4)}
          {this.createCell(5)}
        </div>
        <div className="row">
          {this.createCell(6)}
          {this.createCell(7)}
          {this.createCell(8)}
        </div>
        <div className="player">{player}</div>
        <div className="winner">{winner}</div>
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="app">
        <Rows/>
      </div>
    );
  }
}

export default App;
