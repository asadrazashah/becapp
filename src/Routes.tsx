import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./screens/Login";
import Navbar from './components/Navbar';
function Routes() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/login" component={Login} />
            </Switch>
        </Router>
    );
}

export default Routes;
