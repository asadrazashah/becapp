import React from "react";
import { Grid } from "@material-ui/core";
import DescriptionPage from "../components/DescriptionPage";
import JobCard from "../components/JobCard";
import * as Constants from "../constants";
import "../styles/screens/jobs.scss"

const Jobs: React.FC = () => {
    return <>
        <DescriptionPage title="MY JOBS" link="MY JOBS" />
        <div>
            <Grid container style={{ padding: "40px 80px" }}>
                <Grid item xs={12} sm={12} md={9} lg={9}>
                    <JobCard job={Constants.jobData} />
                </Grid>
                <Grid item xs={12} sm={12} md={3} lg={3}></Grid>
            </Grid>
        </div>
    </>
}

export default Jobs;