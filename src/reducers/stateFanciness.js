import { HAS_SIGNED_IN } from '../actions';

const initialState = { 
  signedInSuccess: false
};

const mainState = (state = {}, action) => {
  switch (action.type) {
    case 'HAS_SIGNED_IN':
      return Object.assign({}, state, { signedInSuccess: true });

    default:
      return state
  }
}

export default mainState;