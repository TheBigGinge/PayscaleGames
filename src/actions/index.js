export const HAS_SIGNED_IN = 'HAS_SIGNED_IN';
export const REGISTER_FORM = 'REGISTER_FORM';
export const SHOW_XWING_GRID = 'SHOW_XWING_GRID';
export const HIDE_XWING_GRID = 'HIDE_XWING_GRID';
export const SHOW_ARMADA_GRID = 'SHOW_ARMADA_GRID';
export const HIDE_ARMADA_GRID = 'HIDE_ARMADA_GRID';

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

export const showXwingGrid = () => {
	return {
		type: 'SHOW_XWING_GRID'
	}
}

export const hideXwingGrid = () => {
	return {
		type: 'HIDE_XWING_GRID'
	}
}

export const showArmadaGrid = () => {
	return {
		type: 'SHOW_ARMADA_GRID'
	}
}

export const hideArmadaGrid = () => {
	return {
		type: 'HIDE_ARMADA_GRID'
	}
}