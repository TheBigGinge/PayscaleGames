import React from 'react';
import { connect } from 'react-redux';
import Game from './game';

let Games = ({ dispatch, games }) => {
	let gamesList = games && games.map((game) => {
		return (<Game game={ game }
					  key={ game.title } />);
	});

	return <div className="games-wrapper">
		{ gamesList }
	</div>;
};

const mapStateToProps = (state) => {
    return {
        games: state.games.gamesList
    };
};

export default connect(mapStateToProps)(Games);