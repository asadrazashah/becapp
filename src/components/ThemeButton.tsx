import React from "react";
import "../styles/components/theme_button.scss";
interface IProps {
    title: string;
    onClick?: () => void;
    style?: object;
    borderRadius?: string;
}
const ThemeButton: React.FC<IProps> = ({ title, onClick, style, borderRadius }) => {
    return <button onClick={onClick} className={`themeBtn ${borderRadius}`} style={{ ...style }} >{title}</button>
}
export default ThemeButton;