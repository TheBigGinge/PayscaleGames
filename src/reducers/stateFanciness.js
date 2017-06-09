import { HAS_SIGNED_IN, CLOSE_ADD_GAME_MODAL, OPEN_ADD_GAME_MODAL,
         OPEN_ADD_PLAYA_MODAL, CLOSE_ADD_PLAYA_MODAL } from '../actions';

const initialState = { 
  signedInSuccess: false,
  showGameModal: false,
  showPlayaModal: false
};

const mainState = (state = {}, action) => {
  switch (action.type) {
    case HAS_SIGNED_IN:
      return Object.assign({}, state, { signedInSuccess: true });
    case OPEN_ADD_GAME_MODAL:
    	return Object.assign({}, state, {
    		showGameModal: true
    	});
    case CLOSE_ADD_GAME_MODAL:
    	return Object.assign({}, state, {
    		showGameModal: false
    	});
    case OPEN_ADD_PLAYA_MODAL:
      return Object.assign({}, state, {
        showPlayaModal: true
      });
    case CLOSE_ADD_PLAYA_MODAL:
      return Object.assign({}, state, {
        showPlayaModal: false
      });
    default:
      return state
  }
}

export default mainState;