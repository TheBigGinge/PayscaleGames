import React from 'react';
let Header = require('../components/header');
let SignIn = require('../components/signin');
let BackGroundImage = require('../components/backgroundimage');
let ButtonTableRouting = require('../components/buttontablerouting');
import RegisterForm from '../components/registerForm';


class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      signedInSuccess: false,
      registerForm: false
    };
    this._onSignInChange = this._onSignInChange.bind(this);
    this._handleRegisterChange = this._handleRegisterChange.bind(this);
  }

  _onSignInChange(newState) {
    this.setState({signedInSuccess: true});
  }

  _handleRegisterChange(newState) {
    this.setState({registerForm: newState});
  }

  render() {
    return(
      <div>
        {!this.state.signedInSuccess && <Header />}
        {!this.state.signedInSuccess && <SignIn callbackParent={this._onSignInChange} />}
        {this.state.signedInSuccess && !this.state.registerForm && <BackGroundImage />}
        {this.state.signedInSuccess && !this.state.registerForm && <ButtonTableRouting 
          callbackParent={this._handleRegisterChange}/>}
        {this.state.signedInSuccess && this.state.registerForm && <RegisterForm />}
      </div>
    )
  }
}

module.exports = Main;