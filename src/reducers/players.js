import { UPDATE_NEW_PLAYA_IMAGE, UPDATE_NEW_PLAYA_EMAIL, UPDATE_NEW_PLAYA_NAME, ADD_NEW_PLAYA_TO_LIST,
		 SET_PLAYERS_FROM_DB } from '../actions/index';

const initialState = {
	playerList: [
		{
			name: "Ashley Dillinger",
			wins: "All the wins!",
			losses: "NONE",
			email: "ashley.dillinger@payscale.com",
			img: "../../images/ashley.png"
		},
		{
			name: "Jim Skerritt",
			wins: "NONE",
			losses: "All the losses! (with rage)",
			email: "jims@payscale.com",
			img: "../../images/Jimbo.png"
		},
		{
			name: "Ryan Moore",
			wins: 3,
			losses: 2,
			email: "ryan.moore@payscale.com",
			img: "../../images/Ryan.png"
		},
		{
			name: "Galen Scovell",
			wins: "¯\\_(ツ)_/¯",
			losses: "¯\\_(ツ)_/¯",
			email: "galen.scovell@payscale.com",
			img: "../../images/Galen.png"
		}
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
		case SET_PLAYERS_FROM_DB:
			let resultList = action.result ? action.result.map((playa) => {
				return {
					name: playa.name,
					email: playa.email,
					img: playa.img_url,
					wins: 0,
					losses: 0
				}
			}) : [];
			return Object.assign({}, state, {
				playerList: action
			})
		default:
			return state;
	}
}

export default players;