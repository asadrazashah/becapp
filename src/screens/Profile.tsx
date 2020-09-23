import React from "react";
import DescriptionPage from "../components/DescriptionPage";
import FeedbackCard from "../components/FeedbackCard";
import content from "../constants/content.json";
import profileImg from "../assets/profile_avatar.png";
import "../styles/screens/profile.scss";

const Profile: React.FC = () => {
    return <>
        <DescriptionPage title="PROFILE" link="PROFILE" />
        <div className="containerProfile">
            <div className="profileDetails">
                <div className="profileHeader">
                    <div className="profileImg"><img src={profileImg} alt="avatar" /></div>
                    <div className="profileInfo">
                        <h4 className="name">Arlene Mckinney</h4>
                        <h5 className="rating">4.8 ( 24 )</h5>
                    </div>
                </div>
                <h3>Overview</h3>
                <p>{content.profileDetails}</p>
            </div>
            <h3 className="workHistory">Work History and feedback</h3>
            <FeedbackCard />
            <FeedbackCard />
        </div>
    </>
}

export default Profile;