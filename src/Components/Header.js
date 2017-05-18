
import React, { Component } from 'react';

class Header extends Component {
	render() {
		return (
			<nav className="navbar navbar-default">
				<ul className="nav navbar-nav pull-right">
					<li className="nav-item">
						<a className="header-link">Log in</a>
					</li>
				</ul>
			</nav>
		)
	}
}

export default Header;