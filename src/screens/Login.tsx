import React from "react";
import { Grid } from "@material-ui/core";
import InputIcon from "../components/InputIcon";
import LoginImg from "../assets/Login.png";
import "../styles/screens/login.scss"

const Login: React.FC = () => {
    return <div className="wrapAuthScreens">
        <div className="login">
            <Grid container>
                <Grid item xs={6}>
                    <div className="loginImg">
                        <img src={LoginImg} alt="loginImg" className="img" />
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <div>
                        <h3 className="headingAuth">Login</h3>
                        <InputIcon placeholder="Username or Email" iconClass="iconPerson" />
                    </div>
                </Grid>
            </Grid>
        </div>
    </div>
}

export default Login;