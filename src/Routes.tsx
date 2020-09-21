import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./screens/Login";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ForgotPassword from './screens/ForgotPassword';
function Routes() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/forgot-password" component={ForgotPassword} />
            </Switch>
            <Footer />
        </Router>
    );
}

export default Routes;
