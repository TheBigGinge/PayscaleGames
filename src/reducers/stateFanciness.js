import { HAS_SIGNED_IN } from '../actions';

const initialState = { 
  signedInSuccess: false,
  registerForm: false
};

const mainState = (state = {}, action) => {
  switch (action.type) {
    case 'HAS_SIGNED_IN':
      return Object.assign({}, state, { signedInSuccess: true });
    case 'REGISTER_FORM':
      return Object.assign({}, state, { registerForm: true });
    default:
      return state
  }
}

export default mainState;