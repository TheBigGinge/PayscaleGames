import React from 'react';


export default class TableRouter extends React.Component {
  constructor() {
    super();
  }

  _handleRegisterAGame() {
    console.log("here");
  }

  render() {
    return(
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h2 className="fancyFont" style={{textAlign: 'center'}}><strong>Do what must be done</strong></h2>
          </div>
        </div>
        <div className="row" >
          <div className="col-md-4">
            <div style={{margin: '20px'}}>
              <div style={{textAlign: 'center'}}>
                <h3 className="buttonHeader">Register a Game</h3>
                <a onClick={() => this._handleRegisterAGame()} href="#"><img className="center-block" src="../images/xwingButtonOne.jpeg" ></img></a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div style={{margin: '20px'}}>
              <div style={{textAlign: 'center'}}>
                <h3 className="buttonHeader">See Overall Results</h3>
                <a onClick={() => this._handleRegisterAGame()} href="#"><img className="center-block" src="../images/xwingButtonTwo.jpg" ></img></a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div style={{margin: '20px'}}>
              <div style={{textAlign: 'center'}}>
                <h3 className="buttonHeader">Track Achievements</h3>
                <a onClick={() => this._handleRegisterAGame()} href="#"><img className="center-block" src="../images/xwingButtonThree.jpeg" ></img></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}