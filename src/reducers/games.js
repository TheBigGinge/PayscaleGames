const initialState = {
	gamesList: [
		{
			title: 'Scythe',
			description: 'WW2 Euro Game',
			img: 'https://stonemaiergames.com/wp-content/uploads/2014/12/Scythe_BOX_03102015.jpg'
		},
		{
			title: 'One Night Ultimate Werewolf',
			description: 'Like mafia but only one night with werewolves',
			img: 'https://cdn.shopify.com/s/files/1/0740/4855/products/ONUW-BOX-COVER.jpg?v=1461752063'
		},
		{
			title: 'Code Names',
			description: 'Be a clever word spy!',
			img: 'https://images-na.ssl-images-amazon.com/images/I/91QlPgozOgL._SL1500_.jpg'
		}
	]
}

const games = (state = initialState, action) => {
	switch (action.type) {
		default:
			return state;
	}
}

export default games;