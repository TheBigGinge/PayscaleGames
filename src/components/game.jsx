import React from 'react';
import { connect } from 'react-redux';

let Game = ({ dispatch, game }) => {
	return <div className="game-wrapper">
		<h2>{game.title}</h2>
		<img src={game.img} alt={game.title} />
		<p>{game.description}</p>
	</div>
};

const mapStateToProps = (state) => {
    return {
    	games: state.games
    };
};

export default connect(mapStateToProps)(Game);