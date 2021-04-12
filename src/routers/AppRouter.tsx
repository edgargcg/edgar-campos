import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";

import { Home } from "../containers/Home/Index";
import { Repositories } from "../containers/Repositories/Index";

export const AppRouter = () => {
	return (
		<Router>
			<>
				<Switch>
					<Route path="/home" component={Home} />
					<Route path="/repos" component={Repositories} />
					<Redirect to="/home" />
				</Switch>
			</>
		</Router>
	);
};
