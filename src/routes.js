
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Books from './Components/Books';
import BookDetail from './Components/Bookdetail';
import {Dashboard} from './Components/Dashboard';
import NotFoundPage from './Components/NotFoundPage';

const routes = (
	<Switch>
		<Route exact path="/" component={Dashboard} />
		<Route path="/books" component={Books} />
		<Route path="/dashboard" component={Dashboard} />
		<Route path="/detail/:id" component={BookDetail} />
		<Route component={NotFoundPage} />
	</Switch>
);

export default routes;