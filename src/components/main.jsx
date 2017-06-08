import React from 'react';
import { connect } from 'react-redux';
import Games from './games'
import Header from './header';


let Main = ({ dispatch }) => (
  <div>
  	<Header />
    Hello Ashley!
    <Games />
  </div>  
);


const mapStateToProps = (state) => {
    return {
        signedInSuccess: state.signedInSuccess
    };
};


Main = connect(mapStateToProps)(Main);
export default Main;