import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
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
import ContactUs from './screens/ContactUs';
import Profile from './screens/Profile';
import Reviews from "./screens/Reviews";
import TrackOrder from './screens/TrackOrder';
import PostJob from './screens/PostJob';
import HowItWorks from './screens/HowItWorks';
import JobDetails from './screens/JobDetails';
import Home from "./screens/Home";
import EditProfile from './screens/EditProfile';
import ProposalDetails from './screens/ProposalDetails';

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
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/home/about" component={AboutUs} />
                    <Route exact path="/home/myjobs" component={MyJobs} />
                    <Route exact path="/home/findwork" component={FindWork} />
                    <Route exact path="/home/saved" component={SavedPosts} />
                    <Route exact path="/home/contact" component={ContactUs} />
                    <Route exact path="/home/profile" component={Profile} />
                    <Route exact path="/reviews" component={Reviews} />
                    <Route exact path="/trackorder" component={TrackOrder} />
                    <Route exact path="/home/postjob" component={PostJob} />
                    <Route exact path="/home/working" component={HowItWorks} />
                    <Route exact path="/home/findwork/jobdetails" component={JobDetails} />
                    <Route exact path="/editprofile" component={EditProfile} />
                    <Route exact path="/home/job/proposal" component={ProposalDetails} />
                    <Route exact path="*" render={() => <Redirect to="/home" />} />
                </Switch>
            </>}
            <Footer />
        </Router>
    );
}

export default Routes;
