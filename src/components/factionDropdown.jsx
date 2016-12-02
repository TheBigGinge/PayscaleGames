import React from 'react';
import { connect } from 'react-redux';

let FactionDropdown = () => (
  <div id="registerFormBackground" className="jumbotron">
    <div className="container">
      <h1>Sons of Ackbar</h1>
    </div>
  </div>
);


FactionDropdown = connect()(FactionDropdown);
export default FactionDropdown;

/*
export default class FactionDropdown extends React.Component {
  constructor() {
    super();
  }

  render() {
    return(
      <div id="registerFormBackground" className="jumbotron">
        <div className="container">
          <h1>Sons of Ackbar</h1>
        </div>
      </div>
    )
  }
}
*/