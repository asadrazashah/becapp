import React from "react";
import { Link, withRouter } from "react-router-dom";
import ThemeButton from "./ThemeButton";
import Logo from "../assets/logo.svg";
import SearchIcon from "../assets/searchIcon.svg";
import "../styles/components/navbar.scss";
interface IProps {
    authenticated: boolean;
    history: any;
}
const Navbar: React.FC<IProps> = ({ authenticated, history }) => {
    const postJob = () => {
        history.push("/home/postjob")
    }
    return <div className="containerNavbar">
        <img src={Logo} alt="logo nav" className="logo" />
        {authenticated && <div className="linksNavBar">
            <Link to="/home">Home</Link>
            <Link to="/home/about">About Us</Link>
            <Link to="/home/working">How it works</Link>
            <Link to="/home/findwork">Find Work</Link>
            <Link to="/home/myjobs">My Jobs</Link>
            <Link to="/">Reports</Link>
            <Link to="/home/contact">Contact Us</Link>
            <span><img src={SearchIcon} alt="search" /></span>
            <ThemeButton title="Post a Job" borderRadius="withRadius" onClick={postJob} />
        </div>}
    </div>
}
export default withRouter<any, any>(Navbar);