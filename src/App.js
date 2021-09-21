import React, { Component } from "react";
import Images from "./components/Images";
import Restart from "./components/Restart";
import "./App.css";
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			player: "🍆",
			squares: ["", "", "", "", "", "", "", "", ""],
		};
		this.squareClick = this.squareClick.bind(this);
	}
	onClick = (index) => {
		if (this.state.squares[index] === "") {
			this.squareClick(index);
		}
	};

	restartGame = () => {
		let squares = this.state;
		let player = this.state;
		squares = ["", "", "", "", "", "", "", "", ""];
		player = "🍆";
		this.setState({ squares: squares, player: player });
	};
	squareClick = (index) => {
		let squares = this.state.squares;
		let player = this.state.player;
		player = player == "🍆" ? "🍑" : "🍆";
		squares[index] = player;
		let winningArray = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6],
		];
		for (let i = 0; i < winningArray.length; i++) {
			let winningCheck = winningArray[i];
			let c0 = winningCheck[0];
			let c1 = winningCheck[1];
			let c2 = winningCheck[2];
			if (
				squares[c0] !== "" &&
				squares[c0] === squares[c1] &&
				squares[c1] === squares[c2]
			) {
				alert(`You Won ${player}!`);
				return this.restartGame();
			} else if (squares.length === 8) {
				alert("It's a Tie");
			}
		}
		this.setState({
			player: player,
			squares: squares,
		});
	};

	render() {
		return (
			<>
				<h1>Eggplants🍆 VS Peaches🍑</h1>
				<h2>The Game</h2>
				<div id='gameboard'>
					{this.state.squares.map((value, index) => {
						return (
							<div onClick={() => this.onClick(index)} id='Square'>
								{value}
							</div>
						);
					})}
				</div>
				<div className= 'peachDiv'>
					<img src='https://aws1.discourse-cdn.com/smallgiantgames/original/3X/7/7/7741fe3e543f4570eeb9f13f8680981b93b97d54.gif' alt='peach twerking' className='peachDancing'/>
					{/* <img src= 'https://i1.wp.com/res.cloudinary.com/owl3rty/image/upload/v1582432583/_patreon/2020/2020-02/telegram_stickers/Untitled_Artwork.gif?w=580&ssl=1' alt='another peach twerking' className = 'peachDancing' /> */}
				</div>

				<Restart restartGame={this.restartGame} />
				<footer>
					Created by: two guys with too much time in their hands 😬
				</footer>
				
			</>
		);
	}
}
export default App;
