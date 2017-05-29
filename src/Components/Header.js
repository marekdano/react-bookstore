
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
	render() {
		return (
			<nav className="navbar navbar-default">
				<ul className="nav navbar-nav pull-right">
					<li className="nav-item">
						<Link to={'/login'} className="header-link">Log in</Link>
					</li>
				</ul>
			</nav>
		)
	}
}

export default Header;