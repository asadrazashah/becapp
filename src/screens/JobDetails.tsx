import React from "react";
import DescriptionPage from "../components/DescriptionPage";
import { Grid } from "@material-ui/core";
import Label from "../components/Label";
import ThemeButton from "../components/ThemeButton";
import content from "../constants/content.json";
import "../styles/screens/job_details.scss";

const JobDetails: React.FC = () => {
    return <>
        <DescriptionPage title="JOB DETAILS" link="FIND WORK/ JOB DETAILS" />
        <Grid container style={{ padding: "3% 10%" }}>
            <Grid item xs={12} sm={12} md={9}>
                <div className="jobDetail">
                    <h1>Lorem Ipsum is simply dummy text of the printing  and typesetting industry.  </h1>
                    <div className="innerWrapper">
                        <p className="description">{content.jobdetails}</p>
                        <Label text="Weight (kg)" bold />
                        <p className="txt">1000 KG</p>
                        <Label text="Dimensions" bold />

                        <Label text="Vehicle Type" bold />
                        <p className="txt">vehicle name</p>
                    </div>
                    <div className="timeBudget">
                        <h4>Posted : <span className="lightTxt">10 mins ago</span></h4>
                        <h4>Budget : <span className="lightTxt"> $200</span></h4>
                    </div>
                </div>
            </Grid>
            <Grid item xs={12} sm={12} md={3}>
                <div className="sidebarJobDetail">
                    <ThemeButton title="Submit a Proposal" style={{ width: "100%" }} />
                    <ThemeButton title="Save a Job" style={{ width: "100%", backgroundColor: "#fff", color: "#000", margin: "20px 0px" }} />
                    <Label text="About the client" bold />
                </div>
            </Grid>
        </Grid>
    </>
}
export default JobDetails;