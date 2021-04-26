import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";

import { Home } from "../containers/Home/";

export const AppRouter = () => {
	return (
		<Router>
			<>
				<Switch>
					<Route path="/home" component={Home} />
					<Redirect to="/home" />
				</Switch>
			</>
		</Router>
	);
};
