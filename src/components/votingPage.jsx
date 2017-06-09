import React from 'react';


let fakeData = [
	{game: 'Scythe', pic: require('../../images/scythe.png') },
	{game: 'Blood Rage', pic: require('../../images/betrayalhouse.jpg') }
];

class VotingPage extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return <div className="voting-page">
			{fakeData.forEach( (game, index) => {
				debugger
				if (index % 2 === 0) {
					return <div className="">
						{ game.game }
					</div>
				}
				return <div className="not-even">
					{game.game}
				</div>
			} )}
		</div>
	}
}

export default VotingPage;