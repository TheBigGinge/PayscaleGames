import React from 'react';
import { connect } from 'react-redux';
import Game from './game';
import '../../css/games.scss';
import { openAddGameModal } from '../actions/index';
import AddGameModal from './addGameModal';

let Games = ({ dispatch, games, showGameModal, signedInSuccess }) => {	
	let gamesList = games && games.map((game, index) => {
		return (<Game game={ game }
					  isEven={ index % 2 == 0}
					  key={ game.title } />);
	});

	return <div className="games-wrapper list-wrapper">
        {showGameModal && <AddGameModal dispatch={dispatch} />}
		<h1>Games We Play</h1>
		<button className="btn btn-default" onClick={(e) => dispatch(openAddGameModal(e))}>Add Game</button>
		{ gamesList }
	</div>;
};

const mapStateToProps = (state) => {
    return {
        games: state.games.gamesList,
        showGameModal: state.mainState.showGameModal,
        signedInSuccess: state.mainState.signedInSuccess
    };
};

export default connect(mapStateToProps)(Games);