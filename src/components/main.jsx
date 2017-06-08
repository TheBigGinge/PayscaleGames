import React from 'react';
import { connect } from 'react-redux';
import AddGameModal from './addGameModal';
import Games from './games'
import Header from './header';
import Players from './players';

class Main extends React.Component {

    constructor(props) {
        super(props);
    }


    _fancyFucnctionForGalen() {
        return 'Hello Galen!';
    }

    render() {
        let { showGameModal, dispatch } = this.props;
        console.log(showGameModal);
        return <div>
  			<Header />
            { this._fancyFucnctionForGalen() }
            {showGameModal && <AddGameModal dispatch={dispatch} />}
            <Games />
            <Players />
        </div>  
    }

};


const mapStateToProps = (state) => {
    return {
        signedInSuccess: state.signedInSuccess,
        showGameModal: state.mainState.showGameModal
    };
};


Main = connect(mapStateToProps)(Main);
export default Main;