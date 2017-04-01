import React from 'react';
import {Link} from 'react-router-dom';

const NotFoundPage = () => (
	<div className="not-found">
		<h1>404</h1>
		<h2>Page not found!</h2>
		<p>
			<Link to="/"><i className="fa fa-angle-left" aria-hidden="true"></i> Back to Home</Link>
		</p>
	</div>
)

export default NotFoundPage;