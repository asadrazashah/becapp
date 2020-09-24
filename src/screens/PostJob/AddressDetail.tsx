import React from "react";
import locationIcon from "../../assets/location.svg";
import "../../styles/screens/post_job.scss";
interface IProps {
    width?: string | number;
}
const AddressDetail: React.FC<IProps> = ({ width }) => {
    return <div className="addressDetail" style={{ width: width }}>
        <img src={locationIcon} alt="location" />
        <h3>Address Detail Here</h3>
        <p>D-44, Subhash Marg, C-Scheme, Jaipur,
Rajasthan. Govt. Apvd.</p>
        <h4>Instruction : <span className="instructionTxt"></span></h4>
    </div>
}
export default AddressDetail;