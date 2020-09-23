import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./screens/Login";
import Header from "./components/Header";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ForgotPassword from './screens/ForgotPassword';
import NewPassword from './screens/NewPassword';
import Register from "./screens/Register";
import AboutUs from './screens/AboutUs';
import MyJobs from './screens/MyJobs';
import FindWork from './screens/FindWork';
import SavedPosts from './screens/SavedPosts';

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
                    <Route exact path="/" component={Login} />
                    <Route exact path="/home/about" component={AboutUs} />
                    <Route exact path="/home/myjobs" component={MyJobs} />
                    <Route exact path="/home/findwork" component={FindWork} />
                    <Route exact path="/home/saved" component={SavedPosts} />
                </Switch>
            </>}
            <Footer />
        </Router>
    );
}

export default Routes;
