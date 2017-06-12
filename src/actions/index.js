import request from 'superagent';

export const HAS_SIGNED_IN = 'HAS_SIGNED_IN';
export const HAS_SIGNED_OUT = 'HAS_SIGNED_OUT';
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
export const VOTE_FOR_GAME = 'VOTE_FOR_GAME';
export const UPDATE_GAME = 'UPDATE_GAME';
export const ADD_WINNER = 'ADD_WINNER';
export const UPDATE_WINNER = 'UPDATE_WINNER';
export const REMOVE_WINNER = 'REMOVE_WINNER';
export const SUBMIT_RESULTS = 'SUBMIT_RESULTS';

export const hasSignedIn = () => {
	return {
		type: HAS_SIGNED_IN
	};
};

export const hasSignedOut = () => {
	return {
		type: HAS_SIGNED_OUT
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
	return (dispatch, getState) => {
		(getState) => this.addPlayaToDb(getState)();
		dispatch(closeAddPlayaModal());
		dispatch(addNewPlayaToList());
	}
}

const addPlayaToDb = (getState) => {
	debugger;
	let newPlaya = getState().players.newPlaya;
	(url, payload, callback) => this.post('localhost:8080/api/players/add',
		{
	        "email": newPlaya.email,
	        "name": newPlaya.name,
	        "img_url": newPlaya.img
	    },
	(result) => {
		console.log(result);
	})
};

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

export const updateGame = (game) => {
	return {
		type: UPDATE_GAME,
		game
	}
}

export const addWinner = () => {
	return {
		type: ADD_WINNER
	}
}

export const updateWinner = (index, winner) => {
	return {
		type: UPDATE_WINNER,
		index,
		winner
	}
}

export const removeWinner = (index) => {
	return {
		type: REMOVE_WINNER,
		index
	}
}

export const submitResults = () => {
	return {
		type: SUBMIT_RESULTS
	}
}

const addNewPlayaToList = () => {
	return {
		type: ADD_NEW_PLAYA_TO_LIST
	}
}

export const voteForGame = (game, value) => {
	return {
		type: VOTE_FOR_GAME,
		game,
		value
	}
}

const post = (url, payload, callback) => {
	debugger;
    return request.post(url)
        .type('application/json')
        .send(payload)
        .end(function(err, res) {
            if(err || !res.ok) {
                return;
            } else {
                if(typeof callback === 'function') {
                    callback(res.body);
                }
            }
        });
}

const get = (url, payload, callback) => {
    return request.get(url)
        .query(payload)
        .end(function(err, res) {
            if(err || !res.ok) {
                return;
            } else {
                if(typeof callback === 'function') {
                    callback(res.body);
                }
            }
        });
}