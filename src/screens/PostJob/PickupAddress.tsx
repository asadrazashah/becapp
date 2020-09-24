import React from "react";
import HeadingTypography from "../../components/HeadingTypography";
import "../../styles/screens/post_job.scss";

interface IProps {
    next: () => void;
}
const PickupAddress: React.FC<IProps> = () => {
    return <>
        <div className="mapPostJob">
        </div>
        <HeadingTypography frontText="PICKUP ADDRESS" backText="PICKUP ADDRESS" />
    </>
}

export default PickupAddress;