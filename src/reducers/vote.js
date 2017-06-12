
const initialState = {
    games: [
        {game: 'Scythe', pic: '../../images/scythe.png', votes: 0 },
        {game: 'Blood Rage', pic: '../../images/bloodrage.jpg', votes: 0 },
        {game: 'Terra Mystica', pic: '../../images/terramystica.jpg', votes: 0 },
        {game: 'Terraforming Mars', pic: '../../images/terraformingmars.jpg', votes: 0 },
        {game: 'X-Wing', pic: '../../images/xwing.jpg', votes: 0 },
        {game: 'Dominion', pic: '../../images/dominion.jpg', votes: 0 },
        {game: 'Ascension', pic: '../../images/ascension.jpg', votes: 0 }
    ]
};


const Votes = (state = initialState, action) => {

    switch (action.type) {
        default:
            return state;
    }
}

export default Votes;