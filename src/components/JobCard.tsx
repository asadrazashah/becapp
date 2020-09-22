import React from "react";
import "../styles/components/job_card.scss"

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
    const { avatar, name, heading, description } = job;
    return <div className="jobCard">
        <span className="intro">
            <img src={avatar} alt="avatar" />
            <h3>{name}</h3>
        </span>
        <h4>{heading}</h4>
        <p>{description}</p>
        <div className="jobDetails">
            <span className="rating">4.8 (24)</span>
            <div className="budget"><h5>Budget : </h5><span> $ 200</span></div>
        </div>
    </div>
}

export default JobCard;