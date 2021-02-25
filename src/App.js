import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      squares: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      playerOne: null,
      playerTwo: null,
      gameOver: false
    }
  }

  // let winningArray = [
  //   [0, 1, 2]
  //   [3, 4, 5]
  //   [6, 7, 8]
  //   [0, 3, 6]
  //   [1, 4, 7]
  //   [2, 5, 8]
  //   [0, 4, 8]
  //   [2, 4, 6]
  // ]

  for(let i=0; i<winningArray.length; i++) {
    let winningCheck = winningArray[i]
    let c0 = winningCheck[0]
    let c1 = winningCheck[1]
    let c2 = winningCheck[2]
}
  render(){
    return(
      <>
        <h1>Tic Tac Toe</h1>
        <div className="gameboard">
        {this.state.squares.map((value, index) => {
          return (
        <Square 
        value={ value }
        key={ index }
        />
          )
        })}
        </div>
      </>
    )
  }
}
export default App
