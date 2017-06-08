import React from 'react';
import { connect } from 'react-redux';
import Games from './games'
import Header from './header';

class Main extends React.Component {

    constructor(props) {
        super(props);
    }


    _fancyFucnctionForGalen() {
        return 'Hello Galen!';
    }

    render() {
        return <div>
      		<Header />
            { this._fancyFucnctionForGalen() }
            <Games />
        </div>  
    }

};


const mapStateToProps = (state) => {
    return {
        signedInSuccess: state.signedInSuccess
    };
};


Main = connect(mapStateToProps)(Main);
export default Main;