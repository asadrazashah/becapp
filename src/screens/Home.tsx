import React from "react";
import { Grid } from "@material-ui/core";
import HeadingTypography from "../components/HeadingTypography";
import content from "../constants/content.json";
import images from "../constants/images";
import "../styles/screens/home.scss";

const Home: React.FC = () => {
    return <>
        <div className="landingImg">
            <div className="txtHeading"><h4>Fast &nbsp; . &nbsp; </h4><h4>Secured &nbsp; . &nbsp; </h4><h4>Worldwide</h4></div>
            <h1 className="landingBigHeading">Secure <span>courier</span> and <span>delivery</span> services</h1>
        </div>
        <div className="aboutUsLanding">
            <Grid container>
                <Grid item xs={12} sm={12} md={6} className="gridAbout">
                    <HeadingTypography backText="ABOUT" frontText="ABOUT US" />
                    <div className="contentAbout">
                        <p>{content.aboutUs}</p>
                    </div>
                </Grid>
                <Grid item xs={12} sm={12} md={6} className="gridEllipse" style={{ height: "500px", padding: "10% 10%" }}>
                    <span className="ellipse a"><img src={images.e2} alt="ellipse" /></span>
                    <span className="ellipse b"><img src={images.e4} alt="ellipse" /></span>
                    <span className="ellipse c"><img src={images.e3} alt="ellipse" /></span>
                    <span className="ellipse d"><img src={images.e1} alt="ellipse" /></span>
                    <span className="ellipse e"><img src={images.e6} alt="ellipse" /></span>
                    <span className="ellipse f"><img src={images.e5} alt="ellipse" /></span>
                </Grid>
            </Grid>
        </div>
    </>
}

export default Home;