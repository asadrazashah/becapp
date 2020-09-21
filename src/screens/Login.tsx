import React from "react";
import { Grid } from "@material-ui/core";
import InputIcon from "../components/InputIcon";
import LoginImg from "../assets/Login.png";
import ThemeButton from "../components/ThemeButton";
import Colors from "../constants/colors";
import "../styles/screens/login.scss"

const Login: React.FC = () => {
    return <div className="wrapAuthScreens">
        <div className="login">
            <Grid container>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <div className="loginImg">
                        <img src={LoginImg} alt="loginImg" className="img" />
                    </div>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <div className="wrapperForm">
                        <h1 className="headingAuth">Login</h1>
                        <InputIcon placeholder="Username or Email" iconClass="iconPerson" type="email" style={{ marginTop: "70px" }} />
                        <InputIcon placeholder="Password" iconClass="iconLock" type="password" />
                        <div className="rememberMe">
                            <span ><input type="checkbox" className="checkbox" />Remember Me </span>
                            <span>Forgot Password ?</span>
                        </div>
                        <div className="containerBtnLogin">
                            <ThemeButton title="Login" />
                            <ThemeButton title="Create an Account" style={{ marginLeft: "20px", backgroundColor: Colors.white, color: Colors.grey }} />
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    </div>
}

export default Login;