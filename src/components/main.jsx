import React from 'react';
import { connect } from 'react-redux';
import { hasSignedIn } from '../actions/';
let Header = require('../components/header');
let SignIn = require('../components/signin');
let BackGroundImage = require('../components/backgroundimage');
let ButtonTableRouting = require('../components/buttontablerouting');
let XwingScoreGrid = require('../components/xwingScoreGrid');
let ArmadaScoreGrid = require('../components/armadaScoreGrid');
//import RegisterForm from '../components/registerForm';


let Main = ({ dispatch, signedInSuccess, showXwingGrid , showArmadaGrid}) => (
  <div>
    {!signedInSuccess && <Header />}
    {!signedInSuccess && <SignIn />}
    {signedInSuccess && !showXwingGrid && !showArmadaGrid && <BackGroundImage />}
    {signedInSuccess && !showXwingGrid && !showArmadaGrid && <ButtonTableRouting />}
    {signedInSuccess && showXwingGrid && <XwingScoreGrid />}
    {signedInSuccess && showArmadaGrid && <ArmadaScoreGrid />}
  </div>  
);


const mapStateToProps = (state) => {
    return {
        signedInSuccess: state.signedInSuccess,
        registerForm: state.registerForm,
        showXwingGrid: state.showXwingGrid,
        showArmadaGrid: state.showArmadaGrid
    };
};


Main = connect(mapStateToProps)(Main);
export default Main;