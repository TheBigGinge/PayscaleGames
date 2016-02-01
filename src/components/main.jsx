import React from 'react';
let Header = require('../components/header');
let SignIn = require('../components/signin');
let BackGroundImage = require('../components/backgroundimage');
let ButtonTableRouting = require('../components/buttontablerouting');


class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      signedInSuccess: false
    };
    this._onChildChange = this._onChildChange.bind(this);
  }

  _onChildChange(newState) {
    this.setState({signedInSuccess: true});
  }

  render() {
    return(
      <div>
        {!this.state.signedInSuccess && <Header />}
        {!this.state.signedInSuccess && <SignIn callbackParent={this._onChildChange} />}
        {this.state.signedInSuccess && <BackGroundImage />}
        {this.state.signedInSuccess && <ButtonTableRouting />}
      </div>
    )
  }
}

module.exports = Main;