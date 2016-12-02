import React from 'react';
import { connect } from 'react-redux';
import FactionDropdown from '../components/factionDropdown'; 

let RegisterForm =() => (
  <div className="container">
  <FactionDropdown />
    <div className="row" >
      <div className="col-md-6">
        <div style={{margin: '20px'}}>
          <div style={{textAlign: 'center'}}>
            <h3 className="buttonHeader">Player One</h3>
            <input className="form-control" type="text" placeholder="Your Email" />
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div style={{margin: '20px'}}>
          <div style={{textAlign: 'center'}}>
            <h3 className="buttonHeader">Player Two</h3>
            <input className="form-control" type="text" placeholder="Your Email" />
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-md-6">
        <div style={{margin: '20px'}}>
          <div style={{textAlign: 'center'}}>
            <h3 className="buttonHeader">Player One Faction</h3>
            <div className="dropdown">
              <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                Choose 
                <span className="caret"></span>
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                <li><a href="#">Rebels</a></li>
                <li><a href="#">Imperials</a></li>
                <li><a href="#">Scum and Villiany</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div style={{margin: '20px'}}>
          <div style={{textAlign: 'center'}}>
            <h3 className="buttonHeader">Player Two Faction</h3>
            <div className="dropdown">
              <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                Choose 
                <span className="caret"></span>
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                <li><a href="#">Rebels</a></li>
                <li><a href="#">Imperials</a></li>
                <li><a href="#">Scum and Villiany</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="row" >
      <div className="col-md-6">
        <div style={{margin: '20px'}}>
          <div style={{textAlign: 'center'}}>
            <h3 className="buttonHeader">Player One Results</h3>
            <button className="btn btn-default" style={{margin: '5px'}}>Win</button>
            <button className="btn btn-default" style={{margin: '5px'}}>Modifed Win</button>
            <button className="btn btn-default" style={{margin: '5px'}}>Loss</button>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div style={{margin: '20px'}}>
          <div style={{textAlign: 'center'}}>
            <h3 className="buttonHeader">Player Two Results</h3>
            <button className="btn btn-default" style={{margin: '5px'}}>Win</button>
            <button className="btn btn-default" style={{margin: '5px'}}>Modifed Win</button>
            <button className="btn btn-default" style={{margin: '5px'}}>Loss</button>
          </div>
        </div>
      </div>
    </div>
  </div>
);


RegisterForm = connect()(RegisterForm);
export default RegisterForm;
/*
export default class RegisterForm extends React.Component {
  constructor() {
    super();
  }

  _handleRegisterAGame() {
    
  }

  render() {
    return(     
      <div className="container">
      <FactionDropdown />
        <div className="row" >
          <div className="col-md-6">
            <div style={{margin: '20px'}}>
              <div style={{textAlign: 'center'}}>
                <h3 className="buttonHeader">Player One</h3>
                <input className="form-control" type="text" placeholder="Your Email" />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div style={{margin: '20px'}}>
              <div style={{textAlign: 'center'}}>
                <h3 className="buttonHeader">Player Two</h3>
                <input className="form-control" type="text" placeholder="Your Email" />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div style={{margin: '20px'}}>
              <div style={{textAlign: 'center'}}>
                <h3 className="buttonHeader">Player One Faction</h3>
                <div className="dropdown">
                  <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    Choose 
                    <span className="caret"></span>
                  </button>
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                    <li><a href="#">Rebels</a></li>
                    <li><a href="#">Imperials</a></li>
                    <li><a href="#">Scum and Villiany</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div style={{margin: '20px'}}>
              <div style={{textAlign: 'center'}}>
                <h3 className="buttonHeader">Player Two Faction</h3>
                <div className="dropdown">
                  <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    Choose 
                    <span className="caret"></span>
                  </button>
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                    <li><a href="#">Rebels</a></li>
                    <li><a href="#">Imperials</a></li>
                    <li><a href="#">Scum and Villiany</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row" >
          <div className="col-md-6">
            <div style={{margin: '20px'}}>
              <div style={{textAlign: 'center'}}>
                <h3 className="buttonHeader">Player One Results</h3>
                <button className="btn btn-default" style={{margin: '5px'}}>Win</button>
                <button className="btn btn-default" style={{margin: '5px'}}>Modifed Win</button>
                <button className="btn btn-default" style={{margin: '5px'}}>Loss</button>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div style={{margin: '20px'}}>
              <div style={{textAlign: 'center'}}>
                <h3 className="buttonHeader">Player Two Results</h3>
                <button className="btn btn-default" style={{margin: '5px'}}>Win</button>
                <button className="btn btn-default" style={{margin: '5px'}}>Modifed Win</button>
                <button className="btn btn-default" style={{margin: '5px'}}>Loss</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
*/