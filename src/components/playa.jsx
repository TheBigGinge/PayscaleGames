import React from 'react';

let Playa = ({ playa, isEven }) => {
	return <div className={ "list-item playa-wrapper " + (isEven ? 'highlight' : '')}>
		<h2>{playa && playa.name}</h2>
		<div>Wins: {playa.wins}</div>
		<div>Losses: {playa.losses}</div>
	</div>
};

export default Playa;