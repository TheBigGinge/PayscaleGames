import React from 'react';

let Playa = ({ playa, isEven }) => {
	return <div className={ "list-item playa-wrapper " + (isEven ? 'highlight' : '')}>
		{playa && <div>
			<h2>{playa.name}</h2>
			<img src={playa.img} alt={playa.name} />
			<div>Wins: {playa.wins}</div>
			<div>Losses: {playa.losses}</div>
		</div>}
	</div>
};

export default Playa;