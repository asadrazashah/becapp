import React from "react";
import { Grid } from "@material-ui/core";
import content from "../constants/content.json";
import DescriptionPage from "../components/DescriptionPage"
import Testimonial from "../components/Testimonial";
import ServiceCard from "../components/ServiceCard";
import serviceData from "../constants/servicesData";
import e1 from "../assets/e1.png";
import e2 from "../assets/e2.png";
import e3 from "../assets/e3.png";
import e4 from "../assets/e4.png";
import e5 from "../assets/e5.png";
import e6 from "../assets/e6.png";
import "../styles/screens/about_us.scss"

const AboutUs: React.FC = () => {
    return <div>
        <DescriptionPage title="ABOUT US" link="ABOUT" />
        <Grid container>
            <Grid item xs={12} sm={12} md={6} className="gridAbout">
                <h3 className="aboutHeading">ABOUT</h3>
                <div className="contentAbout">
                    <h4>ABOUT US</h4>
                    <p>{content.aboutUs}</p>
                </div>
            </Grid>
            <Grid item xs={12} sm={12} md={6} className="gridEllipse" style={{ height: "500px", padding: "10% 10%" }}>
                <span className="ellipse a"><img src={e2} alt="ellipse" /></span>
                <span className="ellipse b"><img src={e4} alt="ellipse" /></span>
                <span className="ellipse c"><img src={e3} alt="ellipse" /></span>
                <span className="ellipse d"><img src={e1} alt="ellipse" /></span>
                <span className="ellipse e"><img src={e6} alt="ellipse" /></span>
                <span className="ellipse f"><img src={e5} alt="ellipse" /></span>
            </Grid>
        </Grid>
        <div className="wrapperService">
            <h3 className="aboutHeading">SERVICE</h3>
            <h4 className="heading">OUR SERVICE</h4>
            <Grid container style={{ paddingRight: "10%", paddingLeft: "10%" }}>
                {serviceData.map((service: any) => {
                    return (<Grid item xs={12} sm={12} md={4}>
                        <ServiceCard service={service} />
                    </Grid>)
                })}
            </Grid>
        </div>
        <div className="wrapperService">
            <h3 className="aboutHeading">WHY US</h3>
            <h4 className="heading">WHY CHOOSE US</h4>
            <Grid container style={{ paddingRight: "10%", paddingLeft: "10%" }}>
                <Grid item xs={12} sm={12} md={4}>
                    <div className="chooseUsCards">
                        <h3>TIMELY DELIVERY</h3>
                        <p>{content.chooseLoremText}</p>
                    </div>
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                    <div className="chooseUsCards">
                        <h3>WORLD WIDE DELIVERY</h3>
                        <p>{content.chooseLoremText}</p>
                    </div></Grid>
                <Grid item xs={12} sm={12} md={4}>
                    <div className="chooseUsCards">
                        <h3>24/7 HOURS SUPPORT</h3>
                        <p>{content.chooseLoremText}</p>
                    </div></Grid>
            </Grid>
        </div>
        <Testimonial overlay="dark" />
    </div>

}

export default AboutUs;