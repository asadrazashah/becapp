import React from "react";
import "../styles/components/input_select.scss";

interface IProps {
    label: string;
    options?: [string];
    style?: object;
}
const InputSelect: React.FC<IProps> = ({ label, options, style }) => {
    return <select className="select-css" style={style}>
        <option>{label}</option>
        <option>Cutomer</option>
        <option>Provider</option>
    </select>
}

export default InputSelect;