import { HAS_SIGNED_IN, REGISTER_FORM, SHOW_XWING_GRID,
  SHOW_ARMADA_GRID, HIDE_ARMADA_GRID } from '../actions';

const initialState = { 
  signedInSuccess: false,
  registerForm: false,
  showXwingGrid: false,
  showArmadaGrid: false
};

const mainState = (state = {}, action) => {
  switch (action.type) {
    case 'HAS_SIGNED_IN':
      return Object.assign({}, state, { signedInSuccess: true });
    case 'REGISTER_FORM':
      return Object.assign({}, state, { registerForm: true });
    case 'SHOW_XWING_GRID':
      return Object.assign({}, state, { showXwingGrid: true })
    case 'HIDE_XWING_GRID':
      return Object.assign({}, state, { showXwingGrid: false })
    case 'SHOW_ARMADA_GRID':
      return Object.assign({}, state, { showArmadaGrid: true })
    case 'HIDE_ARMADA_GRID':
      return Object.assign({}, state, { showArmadaGrid: false })
    default:
      return state
  }
}

export default mainState;