import React from 'react';
import { connect } from 'react-redux';



let Main = ({ dispatch }) => (
  <div>
    Hello Ashley!
  </div>  
);


const mapStateToProps = (state) => {
    return {
        signedInSuccess: state.signedInSuccess
    };
};


Main = connect(mapStateToProps)(Main);
export default Main;