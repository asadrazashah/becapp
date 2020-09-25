import React from "react";
import { Grid } from "@material-ui/core";
import HeadingTypography from "../components/HeadingTypography";
import content from "../constants/content.json";
import DescriptionPage from "../components/DescriptionPage"
import Testimonial from "../components/Testimonial";
import ServiceCard from "../components/ServiceCard";
import serviceData from "../constants/servicesData";
import images from "../constants/images";
import "../styles/screens/about_us.scss"

const AboutUs: React.FC = () => {
    return <div>
        <DescriptionPage title="ABOUT US" link="ABOUT" />
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
        <div className="wrapperService">
            <HeadingTypography backText="Service" frontText="Our service" />
            <Grid container style={{ paddingRight: "10%", paddingLeft: "10%" }}>
                {serviceData.map((service: any) => {
                    return (<Grid item xs={12} sm={12} md={4}>
                        <ServiceCard service={service} />
                    </Grid>)
                })}
            </Grid>
        </div>
        <div className="wrapperService">
            <HeadingTypography backText="why us" frontText="why choose us" />
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