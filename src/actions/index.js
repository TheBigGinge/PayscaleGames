export const HAS_SIGNED_IN = 'HAS_SIGNED_IN';
export const CLOSE_ADD_GAME_MODAL = 'CLOSE_ADD_GAME_MODAL';
export const OPEN_ADD_GAME_MODAL = 'OPEN_ADD_GAME_MODAL';
export const UPDATE_NEW_GAME_TITLE = 'UPDATE_NEW_GAME_TITLE';
export const UPDATE_NEW_GAME_IMAGE = 'UPDATE_NEW_GAME_IMAGE';
export const UPDATE_NEW_GAME_DESCRIPTION = 'UPDATE_NEW_GAME_DESCRIPTION';
export const ADD_NEW_GAME_TO_LIST = 'ADD_NEW_GAME_TO_LIST';
export const OPEN_ADD_PLAYA_MODAL = 'OPEN_ADD_PLAYA_MODAL';
export const CLOSE_ADD_PLAYA_MODAL = 'CLOSE_ADD_PLAYA_MODAL';
export const UPDATE_NEW_PLAYA_IMAGE = 'UPDATE_NEW_PLAYA_IMAGE';
export const UPDATE_NEW_PLAYA_EMAIL = 'UPDATE_NEW_PLAYA_EMAIL';
export const UPDATE_NEW_PLAYA_NAME = 'UPDATE_NEW_PLAYA_NAME';
export const ADD_NEW_PLAYA_TO_LIST = 'ADD_NEW_PLAYA_TO_LIST';


export const hasSignedIn = () => {
	return {
		type: 'HAS_SIGNED_IN'
	};
};

export const openAddGameModal = () => {
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
	e.preventDefault();
	return (dispatch) => {
		dispatch(closeAddGameModal());
		dispatch(addNewGameToList());
	}	
}

export const updateNewGameImage = (e) => {
	let image = e.target.value;
	return {
		type: UPDATE_NEW_GAME_IMAGE,
		image
	}
}

export const updateNewGameDescription = (e) => {
	let description = e.target.value;
	return {
		type: UPDATE_NEW_GAME_DESCRIPTION,
		description
	}
}

export const updateNewGameTitle = (e) => {
	let title = e.target.value;
	return {
		type: UPDATE_NEW_GAME_TITLE,
		title: e.target.value
	}
}

const addNewGameToList = () => {
	return {
		type: ADD_NEW_GAME_TO_LIST
	}
}

export const openAddPlayaModal = () => {
	return {
		type: OPEN_ADD_PLAYA_MODAL
	};
};

export const closeAddPlayaModal = () => {
	return {
		type: CLOSE_ADD_PLAYA_MODAL
	};
};

export const addPlaya = (e) => {
	e.preventDefault();
	return (dispatch) => {
		dispatch(closeAddPlayaModal());
		dispatch(addNewPlayaToList());
	}	
}

export const updateNewPlayaImage = (e) => {
	let image = e.target.value;
	return {
		type: UPDATE_NEW_PLAYA_IMAGE,
		image
	}
}

export const updateNewPlayaEmail = (e) => {
	let email = e.target.value;
	return {
		type: UPDATE_NEW_PLAYA_EMAIL,
		email
	}
}

export const updateNewPlayaName = (e) => {
	let name = e.target.value;
	return {
		type: UPDATE_NEW_PLAYA_NAME,
		name
	}
}

const addNewPlayaToList = () => {
	return {
		type: ADD_NEW_PLAYA_TO_LIST
	}
}