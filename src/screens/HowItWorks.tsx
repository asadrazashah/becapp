import React from "react";
import { Stepper, Step, StepLabel, Grid, StylesProvider } from "@material-ui/core";
import DescriptionPage from "../components/DescriptionPage";
import HeadingTypography from "../components/HeadingTypography";
import Testimonial from "../components/Testimonial";
import constants from "../constants/content.json";
import MeetTalentCard from "../components/MeetTalentCard";
import * as Data from "../constants";
import "../styles/screens/how_it_works.scss";

const HowItWorks: React.FC = () => {
    const steps = ["Post a job - it's free", 'Hire the best match - instantly ', 'Secure payments - always'];
    return <>
        <DescriptionPage title="HOW IT WORKS" link="HOW IT WORKS" />
        <HeadingTypography backText="TALENT MARKETPLACE" frontText="TALENT MARKETPLACE" />
        <div className="howItWorks">
            <h1>Hire in-demand, remote talent in three easy steps. </h1>
            <p>{constants.howitworks}</p>
            <div className="steps">
                <StylesProvider injectFirst>
                    <Stepper alternativeLabel activeStep={-1} >
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel >{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                </StylesProvider>
                <Grid container>
                    <Grid item xs={4}><p className="stepsWorks">{constants.howitworksOne}</p></Grid>
                    <Grid item xs={4}><p className="stepsWorks">{constants.howitworksTwo}</p></Grid>
                    <Grid item xs={4}><p className="stepsWorks">{constants.howitworksThree}</p></Grid>
                </Grid>
            </div>
        </div>
        <HeadingTypography backText="MEET THE TALENT" frontText="MEET THE TALENT" />
        <Grid container style={{ padding: "5% 10%" }}>
            <Grid item xs={12} sm={12} md={4}>
                <MeetTalentCard talent={Data.meetTalentCard} />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
                <MeetTalentCard talent={Data.meetTalentCard} />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
                <MeetTalentCard talent={Data.meetTalentCard} />
            </Grid>

        </Grid>
        <Testimonial overlay="light" />
    </>
}

export default HowItWorks;