import React from 'react';
import { connect } from 'react-redux';
import { showXwingGrid, showArmadaGrid } from '../actions/';


let TableRouter = ({ dispatch }) => (
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <h2 className="fancyFont" style={{textAlign: 'center'}}><strong>Check out current standings</strong></h2>
      </div>
    </div>
    <div className="row" >
      <div className="col-md-4">
        <div style={{margin: '20px'}}>
          <div style={{textAlign: 'center'}}>
            <h3 className="buttonHeader">X-Wing</h3>
            <a href="#" onClick={() => dispatch(showXwingGrid())} ><img className="center-block" src="../images/xwingButtonOne.jpeg" ></img></a>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div style={{margin: '20px'}}>
          <div style={{textAlign: 'center'}}>
            <h3 className="buttonHeader">Armada</h3>
            <a href="#" onClick={() => dispatch(showArmadaGrid())} ><img className="center-block" src="../images/armada.jpg" style={{width: '300px', height: '168px'}}></img></a>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-md-4">
        <div style={{margin: '20px'}}>
          <div style={{textAlign: 'center'}}>
            <h3 className="buttonHeader">Destiny</h3>
            <a href="#"><img className="center-block" src="../images/xwingButtonThree.jpeg" ></img></a>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div style={{margin: '20px'}}>
          <div style={{textAlign: 'center'}}>
            <h3 className="buttonHeader">Imperial Assault</h3>
            <a href="#"><img className="center-block" src="../images/xwingButtonThree.jpeg" ></img></a>
          </div>
        </div>
      </div>
    </div>
  </div>
)

TableRouter = connect()(TableRouter);
export default TableRouter;

/*
export default class TableRouter extends React.Component {
  constructor() {
    super();
  }

  _handleRegisterAGame() {
    this.props.callbackParent(true);
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
*/