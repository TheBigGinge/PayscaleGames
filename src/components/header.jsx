import React from 'react';
import { connect } from 'react-redux';


let Header = () => (
  <div id="headertron">
    <div className="container">
      <h1>Welcome Sons!</h1>
    </div>
  </div>
);

Header = connect()(Header);
export default Header;

/*
export default class Header extends React.Component {
  constructor() {
    super();
  }

  render() {
    return(
        <div id="headertron">
          <div className="container">
            <h1>Welcome Sons!</h1>
          </div>
        </div>
    )
  }
}
*/
