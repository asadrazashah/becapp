import React from "react";
import { Grid } from "@material-ui/core";
import DescriptionPage from "../components/DescriptionPage";
import ProposalFeedCards from "../components/ProposalFeedCards";
import SearchBox from "../components/SearchBox";
import JobCard from "../components/JobCard";
import * as Constants from "../constants";
import "../styles/screens/jobs.scss"

const FindWork: React.FC = () => {
    return <>
        <DescriptionPage title="FIND WORK" link="FIND WORK" />
        <div className="findWork">
            <Grid container>
                <Grid item xs={12} sm={12} md={9} lg={9}>
                    <JobCard job={Constants.jobData} />
                    <JobCard job={Constants.jobData} />
                    <JobCard job={Constants.jobData} />
                </Grid>
                <Grid item xs={12} sm={12} md={3} lg={3}>
                    <div className="sidebarCards">
                        <SearchBox />
                        <ProposalFeedCards />
                    </div>
                </Grid>
            </Grid>
        </div>
    </>
}

export default FindWork;