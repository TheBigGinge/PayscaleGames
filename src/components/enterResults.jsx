import React from 'react';
import { connect } from 'react-redux';
import { updateGame, addWinner, updateWinner, removeWinner,
    submitResults } from '../actions';

class EnterResults extends React.Component {
    render() {
        const { dispatch, selectedGame, enteredWinners,
            games, players } = this.props;
        return <div className="enter-results">
            <div className="enter-results-field">
                <label>Game</label><br/>
                <select value={selectedGame} onChange={e => dispatch(updateGame(e.target.value))}>
                    <option value=""></option>
                    {games.map(g =>
                        <option key={g.title} value={g.title}>{g.title}</option>)}
                </select>
            </div>
            <div className="enter-results-field">
                <label>Winners</label><br/>
                <div>
                    {enteredWinners.map((w, i) =>
                        <div className="winner" key={`${w}-${i}`}>
                            <span>{i+1})</span>&nbsp;
                            <select value={w} onChange={e => dispatch(updateWinner(i, e.target.value))}>
                                <option value=""></option>
                                {players.map(p =>
                                    <option key={p.name} value={p.name}>{p.name}</option>)}
                            </select>
                            {i > 0 && <button onClick={() => dispatch(removeWinner(i))}>Remove</button>}
                        </div>)}
                </div>
                <button onClick={() => dispatch(addWinner())}>Add</button>
            </div>
            <div className="enter-results-field">
                <button onClick={() => dispatch(submitResults())}>Submit</button>
            </div>
        </div>;
    }
}

const mapStateToProps = (state) => {
    return {
        selectedGame: state.enterResults.game,
        enteredWinners: state.enterResults.winners,
        games: state.games.gamesList,
        players: state.players.playerList
    };
};

export default connect(mapStateToProps)(EnterResults);