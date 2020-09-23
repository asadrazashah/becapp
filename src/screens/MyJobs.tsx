import React from "react";
import { Grid } from "@material-ui/core";
import DescriptionPage from "../components/DescriptionPage";
import MyJobCard from "../components/MyJobCard";
import * as Constants from "../constants";
import "../styles/screens/jobs.scss"

const MyJobs: React.FC = () => {
    return <>
        <DescriptionPage title="MY JOBS" link="MY JOBS" />
        <div>
            <Grid container style={{ padding: "40px 80px" }}>
                <Grid item xs={12} sm={12} md={9} lg={9}>
                    <MyJobCard job={Constants.jobData} />
                </Grid>
                <Grid item xs={12} sm={12} md={3} lg={3}></Grid>
            </Grid>
        </div>
    </>
}

export default MyJobs;