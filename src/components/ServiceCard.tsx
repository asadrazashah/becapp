import React from "react";
import "../styles/components/service_card.scss";

interface service {
    imgSrc: any;
    text: string;
    heading: string;
}
interface IProps {
    service: service;
}
const ServiceCard: React.FC<IProps> = ({ service }) => {
    const { imgSrc, text, heading } = service;
    return <div className="serviceCard">
        <img src={imgSrc} alt="Services" />
        <div className="content">
            <h3>{heading}</h3>
            <p>{text}</p>
        </div>
    </div>
}
export default ServiceCard;