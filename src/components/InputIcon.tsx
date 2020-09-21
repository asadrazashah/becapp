import React from "react";
import "../styles/components/input_icon.scss";

interface IProps {
    onChange?: (e?: any) => void;
    value?: any;
    name?: string;
    type?: string;
    placeholder?: string;
    iconClass?: string;
    onBlur?: any;
}
const InputIcon: React.FC<IProps> = ({ iconClass, onChange, onBlur, value, name, type, placeholder }) => {
    return <div className="wrapperInput">
        <div>
            <input
                className={`input ${iconClass}`}
                onChange={onChange}
                placeholder={placeholder}
                onBlur={onBlur}
                value={value}
                name={name}
                type={type}
                autoComplete="off"
            />
        </div>
    </div>
}

export default InputIcon;