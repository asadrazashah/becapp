import React from "react";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import PaymentImg from "../assets/paymentImg.png";
import instaSvg from "../assets/insta.svg";
import fbSvg from "../assets/fb.svg";
import "../styles/components/footer.scss";

const Footer: React.FC = () => {
    return <div className="wrapperFooter">
        <div className="footerBack">
            <Grid container>
                <Grid item xs={6} sm={6} md={3} lg={3} >
                    <div className="logoFooterWrap">
                        <img className="logoFooter" src={Logo} alt="logo" />
                    </div>
                </Grid>
                <Grid item xs={6} sm={6} md={2} lg={2}>
                    <div className="wrapperLinks">
                        <p className="headingFooter">QUICK LINKS</p>
                        <Link to="/login" id="link">SITEMAP</Link>
                        <Link to="/login" id="link">PRICING</Link>
                        <Link to="/login" id="link">PAYMENT METHOD</Link>
                        <Link to="/login" id="link">SUPPORT</Link>
                    </div>
                </Grid>
                <Grid item xs={6} sm={6} md={2} lg={2}>
                    <div className="wrapperLinks">
                        <p className="headingFooter">IMPORTANT LINKS</p>
                        <Link to="/login" id="link">SITEMAP</Link>
                        <Link to="/login" id="link">PRICING</Link>
                        <Link to="/login" id="link">PAYMENT METHOD</Link>
                        <Link to="/login" id="link">SUPPORT</Link>
                    </div>
                </Grid>
                <Grid item xs={6} sm={6} md={5} lg={5}>
                    <div className="getInTouch">
                        <p className="headingFooter">GET IN TOUCH</p>
                        <div className="socialIcons">
                            <span><img src={fbSvg} alt="fb" /></span>
                            <span><img src={instaSvg} alt="insta" /></span>
                            <span><img src={fbSvg} alt="fb" /></span>
                            <span><img src={instaSvg} alt="insta" /></span>
                        </div>
                        <div className="paymentImg"><img src={PaymentImg} className="logoFooter" alt="paymentOptions" /></div>
                    </div>
                </Grid>
            </Grid>
        </div>
        <div className="footerBottom">
            <p>&#169; COPYRIGHT 2020, ALL RIGHTS RESERVED</p>
        </div>
    </div>
}

export default Footer;