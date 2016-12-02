import React from 'react';
import { connect } from 'react-redux';
import { hasSignedIn } from '../actions/';


let SignIn = ({ dispatch }) => (
  <div className="container">
    <div className="row">
      <div className="col-lg-4"></div>
      <div className="col-lg-4">
        <h2 style={{textAlign: 'center'}} 
          className="fancyFont">Click below to Enter</h2>
      </div>
      <div className="col-lg-4"></div>
    </div>
    <div className="row">
      <div className="col-lg-4"></div>
      <div className="col-lg-4">
        <a onClick={() => dispatch(hasSignedIn())}>
            <img style={{borderRadius: '10px'}} 
              className="center-block" 
              src="../images/tieButton.jpg"
            >
            </img>
        </a>
      </div>
    </div>
  </div>
);

SignIn = connect()(SignIn);
export default SignIn;


/*
        <a onClick={() => 
          this._handleSignIn()} 
          href="#">
*/
/*
export default class SignIn extends React.Component {
  constructor() {
    super();
  }

  _handleSignIn() {
    this.props.callbackParent(true);
  }

  render() {
    return(
      <div className="container">
        <div className="row">
          <div className="col-lg-4"></div>
          <div className="col-lg-4">
            <h2 style={{textAlign: 'center'}} 
              className="fancyFont">Click below to Enter</h2>
          </div>
          <div className="col-lg-4"></div>
        </div>
        <div className="row">
          <div className="col-lg-4"></div>
          <div className="col-lg-4">
            <a onClick={() => 
              this._handleSignIn()} 
              href="#">
                <img style={{borderRadius: '10px'}} 
                  className="center-block" 
                  src="../images/tieButton.jpg"
                >
                </img>
              </a>
          </div>
        </div>
      </div>
    )
  }
}
*/