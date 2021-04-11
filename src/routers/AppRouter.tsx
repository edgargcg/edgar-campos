import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

import { Home } from '../containers/Home/Index'

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/home" component={Home} />
                    <Redirect to="/home" />
                </Switch>
            </div>
        </Router>
    )
}
