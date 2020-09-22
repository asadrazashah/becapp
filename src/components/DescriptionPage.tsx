import React from "react";
import truckImg from "../assets/truck.png";
import "../styles/components/page_description.scss";
interface IProps {
    title?: string;
    link?: string;
}
const DescriptionPage: React.FC<IProps> = ({ title, link }) => {
    return <div className="containerDescription">
        <img src={truckImg} alt="background" className="img" />
        <div className="overlay" />
        <h2>{title}</h2>
        <p>HOME / {link}</p>
    </div>
}
export default DescriptionPage;