import React from 'react';
import { connect } from 'react-redux';
import Playa from './playa';
import AddPlayaModal from './addPlayaModal';
import { openAddPlayaModal } from '../actions/index';

let Players = ({ dispatch, players, showPlayaModal, signedInSuccess }) => {
	let playerList = players && players.map((playa, index) => {
		return <Playa playa={playa}
					   isEven={index % 2 == 0}
					   key={playa.name} />;
	});

	return <div className="players-wrapper list-wrapper">
		{showPlayaModal && <AddPlayaModal dispatch={dispatch} />}
		<h1>Playa Stats</h1>
		<button className="btn btn-default" onClick={(e) => dispatch(openAddPlayaModal(e))}>Add Player</button>
		{ playerList }
	</div>;
}

const mapStateToProps = (state) => {
    return {
        players: state.players.playerList,
        showPlayaModal: state.mainState.showPlayaModal,
        signedInSuccess: state.mainState.signedInSuccess
    };
};

Players = connect(mapStateToProps)(Players);
export default Players;