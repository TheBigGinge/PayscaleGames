import React from 'react';
import { connect } from 'react-redux';
import Playa from './playa';

let Players = ({ dispatch, players }) => {
	let playerList = players && players.map((playa, index) => {
		return <Playa playa={playa}
					   isEven={index % 2 == 0}
					   key={playa.name} />;
	});

	return <div className="players-wrapper">
		<h1>Playa Stats</h1>
		{ playerList }
		Business
	</div>;
}

const mapStateToProps = (state) => {
    return {
        players: state.players.playerList
    };
};

Players = connect(mapStateToProps)(Players);
export default Players;