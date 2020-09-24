import React from "react";
import "../styles/components/label.scss";

interface IProps {
    text: string;
    style?: object;
    bold?: boolean;
}

const InputSimple: React.FC<IProps> = ({ text, style, bold }) => {
    return <h6 style={style} className="label" id={bold ? "bold" : ""}>{text}</h6>
}
export default InputSimple;