import React from "react";
import Logo from "../assets/navbar_logo.png";
import "../styles/components/navbar.scss";

const Navbar: React.FC = () => {
    return <div className="containerNavbar">
        <div className="logoNav">
            <img src={Logo} alt="logo nav" />
        </div>
    </div>
}
export default Navbar;