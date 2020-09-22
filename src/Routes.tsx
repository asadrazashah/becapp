import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./screens/Login";
import Header from "./components/Header";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ForgotPassword from './screens/ForgotPassword';
import NewPassword from './screens/NewPassword';
import Register from "./screens/Register";

function Routes() {
    let auth = true;
    return (
        <Router>
            {!auth &&
                <>
                    <Navbar authenticated={false} />
                    <Switch>
                        <Route exact path="/" component={Login} />
                        <Route exact path="/forgot-password" component={ForgotPassword} />
                        <Route exact path="/reset-password" component={NewPassword} />
                        <Route exact path="/register" component={Register} />
                    </Switch>
                </>
            }
            {auth && <>
                <Header />
                <Switch>
                    <Route exact path="/home" component={Login} />
                </Switch>
            </>}
            <Footer />
        </Router>
    );
}

export default Routes;
