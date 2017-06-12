import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { hasSignedIn, hasSignedOut } from '../actions/index';

class Header extends React.Component {
	signOut() {
		let { dispatch, signedInSuccess } = this.props;
		var auth2 = gapi.auth2.getAuthInstance();
        auth2.signOut().then(function () {
          console.log('User signed out.');
        });
        dispatch(hasSignedOut());
	}

	onSignIn() {
		debugger;
		let { dispatch, signedInSuccess } = this.props;
		var profile = googleUser.getBasicProfile();
        console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
        dispatch(hasSignedIn());
	}

	constructor(props) {
		super(props);
		this.onSignIn = this.onSignIn.bind(this);
	}

	render() {
	 	return <div>
			<nav className="navbar navbar-default">
			  <div className="container-fluid">
			    <div className="navbar-header">
			      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
			        <span className="sr-only">Toggle navigation</span>
			        <span className="icon-bar"></span>
			        <span className="icon-bar"></span>
			        <span className="icon-bar"></span>
			      </button>
			      <Link className="navbar-brand" to="/">PayScale Games</Link>
			    </div>

			    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
			      <ul className="nav navbar-nav">
			        <li><Link to="/players" >Players <span className="sr-only"></span></Link></li>
			        <li><Link to="/Games" >Games We Play</Link></li>
			        <li><Link to="/LeaderBoards" >Leaderboards</Link></li>
			        <li><Link to="/vote" >Weekly Game</Link></li>
			        <li><Link to="/enter">Enter Results</Link></li>
			      </ul>
			      <ul className="nav navbar-nav navbar-right">
			        <li><div id="google-sign-on" className="g-signin2" data-onsuccess="function onSignIn() {
						debugger;
						let { dispatch, signedInSuccess } = this.props;
						var profile = googleUser.getBasicProfile();
				        console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
				        console.log('Name: ' + profile.getName());
				        console.log('Image URL: ' + profile.getImageUrl());
				        console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
				        dispatch(hasSignedIn());
					}"></div></li>
			        <li><a href="#" onClick={() => this.signOut()}>Sign out</a></li>
			        <li className="dropdown">
			          <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span className="caret"></span></a>
			          <ul className="dropdown-menu">
			            <li><a href="#">Action</a></li>
			            <li><a href="#">Another action</a></li>
			            <li><a href="#">Something else here</a></li>
			            <li role="separator" className="divider"></li>
			            <li><a href="#">Separated link</a></li>
			          </ul>
			        </li>
			      </ul>
			    </div>
			  </div>
			</nav>

			{this.props.children}
		</div>
	}
}

const mapStateToProps = (state) => {
    return {
        signedInSuccess: state.mainState.signedInSuccess
    };
};

Header = connect(mapStateToProps)(Header);

export default Header;