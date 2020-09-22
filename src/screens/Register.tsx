import React from "react";
import { Grid } from "@material-ui/core";
import InputSelect from "../components/InputSelect";
import InputIcon from "../components/InputIcon";
import RegisterImg from "../assets/register.png";
import ThemeButton from "../components/ThemeButton";
import Colors from "../constants/colors";
import "../styles/screens/login.scss"

const Register: React.FC = () => {
    return <div className="wrapAuthScreens">
        <div className="login">
            <Grid container>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <div className="loginImg">
                        <img src={RegisterImg} alt="loginImg" className="img" />
                    </div>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <div className="wrapperForm">
                        <h1 className="headingAuth">Register</h1>
                        <InputIcon placeholder="Username" iconClass="iconPerson" type="text" style={{ marginTop: "60px" }} />
                        <InputIcon placeholder="Email ID" iconClass="iconPerson" type="email" />
                        <InputIcon placeholder="Mobile Number" iconClass="iconPerson" type="text" />
                        <InputIcon placeholder="Password" iconClass="iconLock" type="password" />
                        <InputSelect label="Select Account Type" />
                        <div className="containerBtnLogin">
                            <ThemeButton title="Register Now" />
                            <ThemeButton title="Login" style={{ marginLeft: "20px", backgroundColor: Colors.white, color: Colors.grey }} />
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    </div>
}

export default Register;