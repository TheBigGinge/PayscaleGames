import React from 'react';
import { connect } from 'react-redux';


let BackGroundImage = () => (
  <div id="mainBackground" >
    <div className="container">
      <h1>Welcome to the Sons of Ackbar Gaming Page!</h1>
    </div>
  </div>
);


BackGroundImage = connect()(BackGroundImage);
export default BackGroundImage;

/*
export default class BackGroundImage extends React.Component {
  constructor() {
    super();
  }

  render() {
    return(
      <div id="mainBackground" >
        <div className="container">
          <h1>Welcome to the Sons of Ackbar Gaming Page!</h1>
        </div>
      </div>
    )
  }
}
*/