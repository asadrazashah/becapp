import React from "react";
import "../styles/components/theme_button.scss";
interface IProps {
    title: string;
    onClick?: () => void;
    style?: object;
}
const ThemeButton: React.FC<IProps> = ({ title, onClick, style }) => {
    return <button onClick={onClick} className="themeBtn" style={{ ...style }} >{title}</button>
}
export default ThemeButton;