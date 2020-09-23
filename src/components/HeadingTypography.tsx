import React from "react";
import "../styles/components/heading_typography.scss";

interface IProps {
    backText: string;
    frontText: string;
}
const HeadingTypography: React.FC<IProps> = ({ backText, frontText }) => {
    return <div className="typography">
        <h3 className="back">{backText}</h3>
        <h4 className="front">{frontText}</h4>
    </div>
}

export default HeadingTypography;