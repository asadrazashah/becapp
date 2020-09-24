import React from "react";
import "../styles/components/simple_input.scss";

interface IProps {
    onChange?: (e?: any) => void;
    value?: any;
    name?: string;
    placeholder?: string;
    style?: object;
}

const TextArea: React.FC<IProps> = ({ onChange, value, name, placeholder, style }) => {
    return <textarea className="textArea" onChange={onChange} value={value} name={name} placeholder={placeholder} style={style} />
}
export default TextArea;