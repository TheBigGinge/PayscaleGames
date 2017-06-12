import React from 'react';
import { connect } from 'react-redux';
import '../../css/votingPage.scss';
import { voteForGame } from '../actions/index';

class VotingPage extends React.Component {

	constructor(props) {
		super(props);

        this.state = {
            checked: false
        };
	}

    _voteForGame(game) {
        let {dispatch} = this.props;
        let value = this.state.checked ? -1 : 1;
        this.setState({checked: !this.state.checked});
        dispatch(voteForGame(game, 1));
    }

	render() {
		return <div className="voting-page">
			{this.props.games.map( (game, index) => {
				return <div className="voting-game" key={index} >
                    <div className="header">
					   {game.game}
                    </div>
                    <div className="voting-booth">
                        <div className="header">
                            Preference
                        </div>
                        <div className="voting-body">
                            Number of votes: {game.votes}
                            <div className="check-box">
                                <label><input type="checkbox" value="" onClick={() => this._voteForGame(game.game)} />Vote for Me?</label>
                            </div>
                        </div>
                    </div>
                    <div className="body">
                        <img src={game.pic} />
                    </div>

				</div>
			} )}
		</div>
	}
}

const mapStateToProps = (state) => {
    return {
        games: state.votes.games

    };
};

export default connect(mapStateToProps)(VotingPage);