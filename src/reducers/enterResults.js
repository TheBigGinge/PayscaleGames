import { UPDATE_GAME, ADD_WINNER, UPDATE_WINNER, REMOVE_WINNER,
    SUBMIT_RESULTS } from '../actions';

const initialState = {
    winners: [''],
    game: ''
};

const enterResults = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_GAME:
            return Object.assign({}, state, {
                game: action.game
            });
        case ADD_WINNER:
            return Object.assign({}, state, {
                winners: [
                    ...state.winners.slice(),
                    ''
                ]
            });
        case UPDATE_WINNER:
            return Object.assign({}, state, {
                winners: [
                    ...state.winners.slice(0, action.index),
                    action.winner,
                    ...state.winners.slice(action.index + 1)
                ]
            });
        case REMOVE_WINNER:
            return Object.assign({}, state, {
                winners: [
                    ...state.winners.slice(0, action.index),
                    ...state.winners.slice(action.index + 1)
                ]
            });
        case SUBMIT_RESULTS:
            return Object.assign({}, initialState);
        default:
            return state;
    }
};

export default enterResults;