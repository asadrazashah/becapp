import React from "react";
import HeadingTypography from "../components/HeadingTypography";
import Label from "../components/Label";
import profileImg from "../assets/profile_avatar.png";
import "../styles/screens/feedback.scss";
import TextArea from "../components/TextArea";
import ThemeButton from "../components/ThemeButton";

const Feedback: React.FC = () => {
    return <>
        <HeadingTypography backText="Feedback" frontText="feedback" />
        <div className="feedbackForm">
            <div className="profileFeedbackHeader">
                <div className="profileImg"><img src={profileImg} alt="avatar" /></div>
                <h4 className="name">Arlene Mckinney</h4>
            </div>
            <div className="rating">
                <Label text="Rate your experience with Username" bold />
                <div className="ratingBox">
                    <span className="box">1</span>
                    <span className="box">2</span>
                    <span className="box">3</span>
                    <span className="box">4</span>
                    <span className="box selected">5</span>
                    <span>Star</span>
                </div>
            </div>
            <Label text="Write your feedback" bold />
            <TextArea placeholder="Write your feedback" />
            <div className="btnEnd">
                <ThemeButton title="Submit" style={{ backgroundColor: "#000", color: '#fff', width: "228px", height: "60px", fontSize: "20px", borderRadius: "10px" }} />
            </div>
        </div>
    </>
}

export default Feedback