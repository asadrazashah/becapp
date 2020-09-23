import React from "react";
import "../styles/components/proposal_feed.scss";

const ProposalFeedCard: React.FC = () => {
    return <>
        <div className="myFeed">
            <div className="heading">
                <p></p>
                <h4>My Feeds</h4>
            </div>
            <p>Saved Posts</p>
        </div>
        <div className="proposals">
            <h2>Proposals</h2>
            <div className="details">
                <p>5 active candidancy</p>
                <p>52 submitted proposals</p>
            </div>
        </div>
    </>
}

export default ProposalFeedCard;