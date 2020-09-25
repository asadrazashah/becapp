import React from "react";
import Navbar from "./Navbar";
import ThemeButton from "./ThemeButton";
import iconMessage from "../assets/message.svg";
import iconNotification from "../assets/notification.svg";
import arrow from "../assets/arrow_down.svg";
import avatar from "../assets/avatar.png";
import "../styles/components/header.scss";

const Header: React.FC = () => {
    return <>
        <div className="topHeaderBar">
            <ThemeButton title="Become Beeker" borderRadius="withRadius" />
            <div className="sectionLast">
                <span className="icons"><img src={iconMessage} alt="icon message" /></span>
                <span className="icons"><img src={iconNotification} alt="icon notification" /></span>
                <span className="avatar"><img src={avatar} alt="profile" /></span>
                <span className="info"><p>Johan Doe</p><span><img src={arrow} alt="icon arrow" /></span></span>
            </div>
        </div>
        <Navbar authenticated={true} />
    </>
}

export default Header;