import { UPDATE_NEW_PLAYA_IMAGE, UPDATE_NEW_PLAYA_EMAIL, UPDATE_NEW_PLAYA_NAME, ADD_NEW_PLAYA_TO_LIST } from '../actions/index';

const initialState = {
	playerList: [
		{
			name: "Ashley Dillinger",
			wins: "All the wins!",
			losses: "NONE"
		},
		{
			name: "Jim Skerritt",
			wins: "NONE",
			losses: "All the losses! (with rage)"
		},
	],
	newPlaya: {
		name: '',
		email: '',
		img: '',
		wins: 0,
		losses: 0
	}
};

const players = (state = initialState, action) => {
	var newNewPlaya;
	switch (action.type) {
		case UPDATE_NEW_PLAYA_NAME:
			newNewPlaya = Object.assign({}, state.newPlaya, {
				name: action.name
			});
			return Object.assign({}, state, {
				newPlaya: newNewPlaya
			});
		case UPDATE_NEW_PLAYA_EMAIL:
			newNewPlaya = Object.assign({}, state.newPlaya, {
				email: action.email
			});
			return Object.assign({}, state, {
				newPlaya: newNewPlaya
			});
		case UPDATE_NEW_PLAYA_IMAGE:
			newNewPlaya = Object.assign({}, state.newPlaya, {
				img: action.image
			});
			return Object.assign({}, state, {
				newPlaya: newNewPlaya
			});
		case ADD_NEW_PLAYA_TO_LIST:
			let newPlayasList = Object.assign([], state.playerList);
			newPlayasList.push(state.newPlaya);
			newNewPlaya = Object.assign({}, state.newPlaya, {
				name: '',
				email: '',
				img: '',
				wins: 0,
				losses: 0
			});
			return Object.assign({}, state, {
				newPlaya: newNewPlaya,
				playerList: newPlayasList
			});
		default:
			return state;
	}
}

export default players;