import React from 'react';
import RankingList from './rankingList';
import '../../css/leaderboard.scss';


class LeaderBoard extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return <div className="leaderboard">
			<div>
				<div className="header">
					<img src={ require('../../images/scythe.png') }/>
				</div>
				<div className="picture-header">
				</div>
			</div>
			<div className="main-table">
				<RankingList />
			</div>
		</div>
	}
}

export default LeaderBoard;