import React from 'react';
import { connect } from 'react-redux';
import Games from './games'


let Main = ({ dispatch }) => (
  <div>
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