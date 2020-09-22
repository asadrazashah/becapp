import React from "react";
import { Grid } from "@material-ui/core";
import InputIcon from "../components/InputIcon";
import ForgotImg from "../assets/forgot_password.png";
import ThemeButton from "../components/ThemeButton";
import "../styles/screens/login.scss"

const NewPassword: React.FC = () => {
    return <div className="wrapAuthScreens">
        <div className="login">
            <Grid container>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <div className="loginImg">
                        <img src={ForgotImg} alt="set new password" className="img" />
                    </div>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <div className="wrapperForm">
                        <h1 className="headingAuth">Create New Password</h1>
                        <p>Please Enter the OTP number and re-set your password</p>
                        <InputIcon placeholder="Enter OTP" iconClass="iconPerson" type="email" />
                        <InputIcon placeholder="New Password" iconClass="iconLock" type="password" />
                        <InputIcon placeholder="Re-Enter Password" iconClass="iconLock" type="password" />

                        <ThemeButton title="Re-Set Password" />
                    </div>
                </Grid>
            </Grid>
        </div>
    </div>
}

export default NewPassword;