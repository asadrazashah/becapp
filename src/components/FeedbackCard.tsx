import React from "react";
import "../styles/components/feedback_card.scss";

const FeedbackCard: React.FC = () => {
    return <div className="feedbackCard">
        <div className="header">
            <h4>Rosemary Coplery</h4>
            <span>02/03/2020</span>
        </div>
        <p>Alex is a very great designer, having a lot of positive energy with him!</p>
        <h4 className="inProgress">Job in Progress</h4>
        <h4>Rating</h4>
    </div>
}
export default FeedbackCard