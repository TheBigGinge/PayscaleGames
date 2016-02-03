import React from 'react';


export default class FactionDropdown extends React.Component {
  constructor() {
    super();
  }

  render() {
    return(
      <div className="dropdown">
        <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
          Dropdown
          <span className="caret"></span>
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
          <li><a href="#">Rebels</a></li>
          <li><a href="#">Imperials</a></li>
          <li><a href="#">Scum and Villiany</a></li>
        </ul>
      </div>
    )
  }
}