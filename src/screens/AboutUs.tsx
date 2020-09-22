import React from "react";
import DescriptionPage from "../components/DescriptionPage"
import Testimonial from "../components/Testimonial";
import "../styles/screens/about_us.scss"

const AboutUs: React.FC = () => {
    return <div>
        <DescriptionPage title="ABOUT US" link="ABOUT" />
        <Testimonial overlay="dark" />
    </div>

}

export default AboutUs;