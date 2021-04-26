import React from "react";
import {
	Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";
import { createBrowserHistory } from "history";

import { Home } from "../containers/Home";

const history = createBrowserHistory();

export const AppRouter = () => {
	return (
		<Router history={history} >
			<>
				<Switch>
					<Route path="/home" component={Home} />
					<Redirect to="/home" />
				</Switch>
			</>
		</Router>
	);
};
