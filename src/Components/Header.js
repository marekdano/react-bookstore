
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
	renderLinks() {
		if (this.props.authenticated) {
			// show a link to log out
			return <li className="nav-item">
				<Link to="/logout" className="nav-link header-link">Log out</Link>
			</li>	
		} else {
			// show a link to log in or register
			return [
				<li className="nav-item" key={1}>
					<Link to="/login" className="nav-link header-link">Log in</Link>
				</li>,
				<li className="nav-item" key={2}>
					<Link to="/register" className="nav-link header-link">Register</Link>
				</li>
			];
		}
	}

	render() {
		return (
			<nav className="navbar navbar-default">
				<Link to="/" className="navbar-brand">Bookstore</Link>
				<ul className="nav navbar-nav pull-right">
					{this.renderLinks()}
				</ul>
			</nav>
		)
	}
}

function mapStateToProps(state) {
	return {
		authenticated: state.auth.authenticated
	}
}

export default connect(mapStateToProps)(Header);