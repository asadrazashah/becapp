import React from "react";
import "../styles/components/label.scss";

interface IProps {
    text: string;
    style?: object;
}

const InputSimple: React.FC<IProps> = ({ text, style }) => {
    return <h6 style={style} className="label">{text}</h6>
}
export default InputSimple;