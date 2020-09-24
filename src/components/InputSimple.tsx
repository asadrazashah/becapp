import React from "react";
import "../styles/components/simple_input.scss";

interface IProps {
    onChange?: (e?: any) => void;
    value?: any;
    name?: string;
    type?: string;
    placeholder?: string;
    style?: object;
}

const InputSimple: React.FC<IProps> = ({ onChange, value, name, type, placeholder, style }) => {
    return <input placeholder={placeholder} name={name} type={type} style={style} value={value} onChange={onChange} className="simpleInput" />
}
export default InputSimple;