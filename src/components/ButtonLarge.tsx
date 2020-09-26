import React from "react";
import "../styles/components/theme_button.scss";
interface IProps {
    title: string;
    onClick?: () => void;
    style?: object;
    mr?: boolean;
    color: string;
}
const ButtonLarge: React.FC<IProps> = ({ title, onClick, style, color, mr }) => {
    return <button onClick={onClick} className={`btnLarge ${color}`} style={{ marginRight: mr ? "10px" : "0px", ...style }} >{title}</button>
}
export default ButtonLarge;