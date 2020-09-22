import React from "react";
import "../styles/components/input_select.scss";

interface IProps {
    label: string;
    options?: [string];
}
const InputSelect: React.FC<IProps> = ({ label, options }) => {
    return <select className="select-css">
        <option>{label}</option>
        <option>Cutomer</option>
        <option>Provider</option>
    </select>
}

export default InputSelect;