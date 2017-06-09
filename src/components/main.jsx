import React from 'react';
import { connect } from 'react-redux';
import AddGameModal from './addGameModal';
import Games from './games'
import Players from './players';
import '../../css/main.scss';

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
        return <div className="main">
            <div id='backgroundImage' >
                <div className="container">
                    Welcome to the 3rd Floor Gaming Group!
                </div>
            </div>
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