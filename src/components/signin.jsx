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
          <div className="col-lg-4"></div>
          <div className="col-lg-4">
            <h2 style={{textAlign: 'center'}} 
              className="fancyFont">Sign In</h2>
          </div>
          <div className="col-lg-4"></div>
        </div>
        <div className="row" >
          <div className="col-lg-4"></div>
          <div className="col-lg-4">
            <input className="form-control" type="text" placeholder="Email..." />
            <input className="form-control" type="text" placeholder="Password..." />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4"></div>
          <div className="col-lg-4">
            <h4 style={{textAlign: 'center'}}>Click here to sign in</h4>
          </div>
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