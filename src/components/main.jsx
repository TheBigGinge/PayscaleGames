import React from 'react';
import { connect } from 'react-redux';
import { hasSignedIn } from '../actions/';
let Header = require('../components/header');
let SignIn = require('../components/signin');
let BackGroundImage = require('../components/backgroundimage');
let ButtonTableRouting = require('../components/buttontablerouting');
//import RegisterForm from '../components/registerForm';


let Main = ({ dispatch, signedInSuccess, registerForm }) => (
  <div>
    {!signedInSuccess && <Header />}
    {!signedInSuccess && <SignIn />}
    {signedInSuccess && !registerForm && <BackGroundImage />}
    {signedInSuccess && !registerForm && <ButtonTableRouting />}
    {signedInSuccess && registerForm && <RegisterForm />}
  </div>  
);


const mapStateToProps = (state) => {
    return {
        signedInSuccess: state.signedInSuccess,
        registerForm: state.registerForm
    };
};


Main = connect(mapStateToProps)(Main);
export default Main;