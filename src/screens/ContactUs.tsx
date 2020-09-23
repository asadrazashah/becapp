import React from "react";
import { Grid, TextField } from "@material-ui/core";
import DescriptionPage from "../components/DescriptionPage"
import ThemeButton from "../components/ThemeButton";
import "../styles/screens/contact_us.scss";

const ContactUs: React.FC = () => {
    return <>
        <DescriptionPage title="CONTACT US" link="CONTACT US" />
        <Grid container style={{ padding: "30px 10% 50px 10%" }}>
            <Grid item xs={12} sm={12} md={6}>
                <div className="background">
                    <div className="contactDetails">
                        <h1>Beecapp</h1>
                        <h3>Address</h3>
                        <p>D-44, Subhash Marg, C-Scheme, Jaipur, Rajasthan. Govt. Apvd.
D-44, Subhash Marg, C-Scheme, Jaipur, Rajasthan.</p>
                        <h3>Email Address</h3>
                        <p>infor@beecapp.com</p>
                        <h3>Contact number</h3>
                        <p>+1 - 857 958 2315</p>
                    </div>
                </div>
            </Grid>
            <Grid item xs={12} sm={12} md={6} id="contactForm">
                <div className="contactFields">
                    <h1>Contact Us</h1>
                    <Grid container>
                        <Grid item xs={12} sm={12} md={6} id="input">
                            <TextField placeholder="First Name" fullWidth />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} id="input">
                            <TextField placeholder="Last Name" fullWidth />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} id="input">
                            <TextField placeholder="Email Address" fullWidth />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} id="input">
                            <TextField placeholder="Phone Number" fullWidth />
                        </Grid>
                        <Grid item id="input" xs={12} sm={12} md={12}>
                            <TextField
                                multiline
                                rows={5}
                                placeholder="Write your Message Here"
                                fullWidth
                            />
                        </Grid>
                    </Grid>
                    <ThemeButton title="Submit a Proposal" />
                </div>
            </Grid>
        </Grid>
    </>

}
export default ContactUs;