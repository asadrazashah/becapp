import React from "react";
import { Link } from "react-router-dom";
import ThemeButton from "./ThemeButton";
import Logo from "../assets/logo.svg";
import SearchIcon from "../assets/searchIcon.svg";
import "../styles/components/navbar.scss";
interface IProps {
    authenticated: boolean;
}
const Navbar: React.FC<IProps> = ({ authenticated }) => {
    return <div className="containerNavbar">
        <img src={Logo} alt="logo nav" className="logo" />
        {authenticated && <div className="linksNavBar">
            <Link to="/">Home</Link>
            <Link to="/">About Us</Link>
            <Link to="/">How it works</Link>
            <Link to="/">Find Work</Link>
            <Link to="/">My Jobs</Link>
            <Link to="/">Reports</Link>
            <Link to="/">Contact Us</Link>
            <span><img src={SearchIcon} alt="search" /></span>
            <ThemeButton title="Post a Job" borderRadius="withRadius" />
        </div>}
    </div>
}
export default Navbar;