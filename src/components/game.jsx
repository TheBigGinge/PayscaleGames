import React from 'react';

let Game = ({ game, isEven }) => {
	return <div className={ "game-wrapper " + (isEven ? 'highlight' : '')}>
		<h2>{game.title}</h2>
		<img src={game.img} alt={game.title} />
		<p>{game.description}</p>
	</div>
};

export default Game;