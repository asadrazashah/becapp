import React from "react";
import "../styles/components/meet_talent.scss";

interface talent {
    name: string;
    description: string;
    profileImg: any;
}
interface IProps {
    talent: talent;
}
const MeetTalentCard: React.FC<IProps> = ({ talent }) => {
    const { name, description, profileImg } = talent;
    return <div className="talentCard">
        <div className="header">
            <div className="profileImg"><img src={profileImg} alt="avatar" /></div>
            <div className="profileInfo">
                <h4 className="name">{name}</h4>
                <h5 className="rating">4.8 ( 24 )</h5>
            </div>
        </div>
        <p>{description}</p>
    </div>
}

export default MeetTalentCard;