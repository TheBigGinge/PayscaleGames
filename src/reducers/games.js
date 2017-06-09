import { UPDATE_NEW_GAME_TITLE, UPDATE_NEW_GAME_IMAGE, UPDATE_NEW_GAME_DESCRIPTION,
		 ADD_NEW_GAME_TO_LIST } from '../actions/index';

const initialState = {
	gamesList: [
		{
			title: 'Scythe',
			description: 'WW2 Euro Game',
			img: 'https://stonemaiergames.com/wp-content/uploads/2014/12/Scythe_BOX_03102015.jpg'
		},
		{
			title: 'One Night Ultimate Werewolf',
			description: 'Like mafia but ultimately only one night with werewolves',
			img: 'https://cdn.shopify.com/s/files/1/0740/4855/products/ONUW-BOX-COVER.jpg?v=1461752063'
		},
		{
			title: 'Code Names',
			description: 'Be a clever word spy!',
			img: 'https://images-na.ssl-images-amazon.com/images/I/91QlPgozOgL._SL1500_.jpg'
		}
	],
	newGame: {
		title: '',
		description: '',
		img: ''
	}
}

const games = (state = initialState, action) => {
	var newNewGame;
	switch (action.type) {
		case UPDATE_NEW_GAME_TITLE:
			newNewGame = Object.assign({}, state.newGame, {
				title: action.title
			});
			return Object.assign({}, state, {
				newGame: newNewGame
			});
		case UPDATE_NEW_GAME_DESCRIPTION:
			newNewGame = Object.assign({}, state.newGame, {
				description: action.description
			});
			return Object.assign({}, state, {
				newGame: newNewGame
			});
		case UPDATE_NEW_GAME_IMAGE:
			newNewGame = Object.assign({}, state.newGame, {
				img: action.image
			});
			return Object.assign({}, state, {
				newGame: newNewGame
			});
		case ADD_NEW_GAME_TO_LIST:
			debugger;
			let newGamesList = Object.assign([], state.gamesList);
			newGamesList.push(state.newGame);
			newNewGame = Object.assign({}, state.newGame, {
				description: '',
				title: '',
				img: ''
			});
			return Object.assign({}, state, {
				newGame: newNewGame,
				gamesList: newGamesList
			});
		default:
			return state;
	}
}

export default games;