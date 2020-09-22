import React from "react";
import { Grid } from "@material-ui/core";
import InputIcon from "../components/InputIcon";
import ForgotImg from "../assets/forgot_password.png";
import ThemeButton from "../components/ThemeButton";
import "../styles/screens/login.scss"

const ForgotPassword: React.FC = () => {
    return <div className="wrapAuthScreens">
        <div className="login">
            <Grid container>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <div className="loginImg">
                        <img src={ForgotImg} alt="fotgot password" className="img" />
                    </div>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <div className="wrapperForm">
                        <h1 className="headingAuth">Forgot Password</h1>
                        <InputIcon placeholder="Mobile Number" iconClass="iconPerson" type="email" style={{ marginTop: "60px" }} />

                        <ThemeButton title="Send OTP" />
                    </div>
                </Grid>
            </Grid>
        </div>
    </div>
}

export default ForgotPassword;