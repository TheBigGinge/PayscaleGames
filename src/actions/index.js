export const HAS_SIGNED_IN = 'HAS_SIGNED_IN';
export const CLOSE_ADD_GAME_MODAL = 'CLOSE_ADD_GAME_MODAL';
export const OPEN_ADD_GAME_MODAL = 'OPEN_ADD_GAME_MODAL';


export const hasSignedIn = () => {
	return {
		type: 'HAS_SIGNED_IN'
	};
};

export const openAddGameModal = () => {
	console.log('opening');
	return {
		type: OPEN_ADD_GAME_MODAL
	};
};

export const closeAddGameModal = () => {
	return {
		type: CLOSE_ADD_GAME_MODAL
	};
};

export const addGame = (e) => {
	console.log(e);
}