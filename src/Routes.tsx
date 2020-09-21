import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./screens/Login";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
function Routes() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Login} />
            </Switch>
            <Footer />
        </Router>
    );
}

export default Routes;
