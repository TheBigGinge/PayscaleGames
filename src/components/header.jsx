import React from 'react';


export default class Header extends React.Component {
  constructor() {
    super();
  }

  render() {
    return(
        <div id="headertron" className="jumbotron">
          <div className="container">
            <h1>West Seattle X-wing</h1>
            <h4>Sign in for league results and achievement information</h4> 
          </div>
        </div>
    )
  }
}
