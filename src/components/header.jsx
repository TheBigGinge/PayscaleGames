import React from 'react';


export default class Header extends React.Component {
  constructor() {
    super();
  }

  render() {
    return(
      <div className="container">
        <div id="headertron" className="jumbotron">
          <div className="container">
            <h1>West Seattle X-wing</h1>
          </div>
        </div>
      </div>
    )
  }
}
