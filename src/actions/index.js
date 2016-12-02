export const HAS_SIGNED_IN = 'HAS_SIGNED_IN';
export const REGISTER_FORM = 'REGISTER_FORM';

export const hasSignedIn = () => {
  return {
    type: 'HAS_SIGNED_IN'
  }
}

export const registerForm =() => {
	return {
		type: 'REGISTER_FORM'
	}
}