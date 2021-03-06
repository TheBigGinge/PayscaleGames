import React from 'react';
import { connect } from 'react-redux';
import '../../css/main.scss';

class Main extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let { showGameModal, dispatch } = this.props;

        return <div className="main">
            <div id='backgroundImage' >
                <div className="container">
                    Welcome to the PayScale Board Gaming Group!
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