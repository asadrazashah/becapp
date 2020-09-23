import React from "react";
import HeadingTypography from "../components/HeadingTypography";
import InputSelect from "../components/InputSelect";
import FeedbackCard from "../components/FeedbackCard";
import "../styles/screens/reviews.scss";

const Reviews: React.FC = () => {
    return <>
        <HeadingTypography backText="REVIEWS" frontText="REVIEWS" />
        <div className="reviews">
            <div className="wrapperReviewInput"> <div className="selectReview"><InputSelect label="Newest First" /></div></div>
            <div>
                <FeedbackCard />
                <FeedbackCard />
                <FeedbackCard />
            </div>
        </div>
    </>
}

export default Reviews;