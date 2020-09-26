import React from "react";
import { Grid } from "@material-ui/core";
import DescriptionPage from "../components/DescriptionPage";
import AddressDetails from "../screens/PostJob/AddressDetail";
import Label from "../components/Label";
import content from "../constants/content.json";
import profileImg from "../assets/profile_avatar.png";
import "../styles/screens/proposal_details.scss";

const ProposalDetails: React.FC = () => {
    return <>
        <DescriptionPage title="Proposal Details" link="My Jobs" />
        <div className="proposalDetails">
            <div className="jobDetails">
                <h2>Job Details</h2>
                <Grid container>
                    <Grid item xs={12} sm={12} md={6}><AddressDetails /></Grid>
                    <Grid item xs={12} sm={12} md={6}><AddressDetails /></Grid>
                </Grid>
                <Label text="More Information" bold />
                <Grid container>
                    <Grid item xs={6}>
                        <Label text="Name" />
                        <p>Micle</p>
                    </Grid>
                    <Grid item xs={6}>
                        <Label text="Mobile Number" />
                        <p>+91 - 987 654 3210</p>
                    </Grid>
                </Grid>
                <div>
                    <Label text="Type of shipping" />
                    <p>Shipping with special feature </p>
                </div>
                <div>
                    <Label text="About Shipping" />
                    <p>{content.aboutShipping}</p>
                </div>
                <Label text="About Package" bold />
                <div>
                    <Label text="Weight" />
                    <p>1000 KG</p>
                </div>
                <Label text="Dimensions" bold />
                <Grid container>
                    <Grid item xs={4}>
                        <Label text="Lengh (cm)" />
                        <p>858 cm</p>
                    </Grid>
                    <Grid item xs={4}>
                        <Label text="Width (cm)" />
                        <p>50 cm</p>
                    </Grid>
                    <Grid item xs={4}>
                        <Label text="Height (cm)" />
                        <p>857 cm</p>
                    </Grid>
                </Grid>
                <Label text="Vehicle Type" />
                <p>Pickup</p>
            </div>
            <div className="coverLetter">
                <h2>Cover Letter</h2>
                <div className="profileHeader">
                    <div className="profileImg"><img src={profileImg} alt="avatar" /></div>
                    <div className="profileInfo">
                        <h4 className="name">Arlene Mckinney</h4>
                        <h5 className="rating">4.8 ( 24 )</h5>
                    </div>
                </div>
                <p className="description">{content.loremText}</p>
                <div className="pricing">
                    <span className="budget"><h4>Budget &nbsp; : &nbsp;</h4><p>$ 300</p></span>
                    <span><h4>Offer Price &nbsp; : &nbsp; </h4><p>$ 200</p></span>
                </div>
                <Grid container >
                    <Grid item xs={4} sm={4} md={2}>
                        <Label text="Pickup date" bold style={labelStyle} />
                        <p>20/7/2020</p>
                    </Grid>
                    <Grid item xs={4} sm={4} md={2}>
                        <Label text="Delivery Date" bold style={labelStyle} />
                        <p>20/7/2020</p>
                    </Grid>
                    <Grid item xs={4} sm={4} md={2}>
                        <Label text="Vehicle Type" bold style={labelStyle} />
                        <p>Pickup</p>
                    </Grid>
                </Grid>
            </div>
        </div>
    </>
}

const labelStyle = {
    color: "#8F511D",
    padding: "0px"
}

export default ProposalDetails