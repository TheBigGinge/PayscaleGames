import React from 'react';


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
          <div className="col-lg-6">
            <h2>Sign In</h2>
          </div>
        </div>
        <div className="row" >
          <div className="col-lg-4">
            <input className="form-control" type="text" placeholder="Email..." />
            <input className="form-control" type="text" placeholder="Password..." />
            <btn className="btn btn-success" type="button" style={{marginBottom: '10px'}} onClick={() => this._handleSignIn()}>Go</btn>
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-7">
            <div id="sidertron" className="jumbotron">
              <div className="container">
                <h2>Update and track league results... son!</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}