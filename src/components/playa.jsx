import React from 'react';

let Playa = ({ playa, isEven }) => {
	return <div className={ "playa-wrapper " + (isEven ? 'highlight' : '')}>
		<h2>{playa && playa.name}</h2>
	</div>
};

export default Playa;