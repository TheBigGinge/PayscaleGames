const initialState = {
	playerList: [
		{
			name: "Ashley Dillinger",
			wins: "All the wins!",
			losses: "NONE"
		},
		{
			name: "Jim Skerritt",
			wins: "NONE",
			losses: "All the losses! (with rage)"
		}
	]
};

const players = (state = initialState, action) => {
	switch (action.type) {
		default:
			return state;
	}
}

export default players;