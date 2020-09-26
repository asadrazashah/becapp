import React from "react";
import saveHeart from "../assets/saveheart.svg";
import verifiedIcon from "../assets/verifiedIcon.svg";
import "../styles/components/job.scss"

interface job {
    avatar: any;
    name?: string;
    heading?: string;
    description?: string;
}
interface IProps {
    job: job
}
const JobCard: React.FC<IProps> = ({ job }) => {
    const { heading, description } = job;
    return <div className="jobCard">
        <h4>{heading}</h4>
        <p>{description}</p>
        <div className="jobCardDetails">
            <div className="budget">
                <span className="time">
                    <span>Fixed Price : </span><span>10 min ago</span>
                </span>
                <span className="time">
                    <span>Budget : </span><span >$ 200</span>
                </span>
            </div>
            <div className="ratings">
                <span className="rating">4.8 (24)</span>
                <span className="verified"><span className="verifiedIcon"><img src={verifiedIcon} alt="saved" /></span><span>Payment Verified</span></span>
                <span className="saved">
                    <div className="line"></div>
                    <span className="heartIcon"> <img src={saveHeart} alt="saved" /></span>
                </span>
            </div>
        </div>

    </div>
}

export default JobCard;