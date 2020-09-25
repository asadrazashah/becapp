import React from "react";
import HeadingTypography from "../components/HeadingTypography";
import { Grid } from "@material-ui/core";
import Label from "../components/Label";
import InputSimple from "../components/InputSimple";
import TextArea from "../components/TextArea"
import ThemeButton from "../components/ThemeButton";
import InputSelect from "../components/InputSelect";
import "../styles/screens/edit_profile.scss";

const EditProfile: React.FC = () => {
    return <>
        <HeadingTypography backText="Edit Profile" frontText="Edit profile" />
        <div className="formEditProfile">
            <Grid container id="rowEditProfile">
                <Grid item xs={12} sm={12} md={6} id="colEditProfile">
                    <Label text="Upload Profile" />
                    <div className="browseInput"><InputSimple placeholder="Choose file" /><button>Browse</button></div> </Grid>
                <Grid item xs={12} sm={12} md={6} id="colEditProfile">
                    <Label text="Upload Cover Photo" />
                    <div className="browseInput"><InputSimple placeholder="Choose file" /><button>Browse</button></div></Grid>
            </Grid>
            <Grid container id="rowEditProfile">
                <Grid item xs={12} sm={12} md={4} id="colEditProfile">
                    <Label text="User Name" />
                    <InputSimple placeholder="Write here ..." />
                </Grid>
                <Grid item xs={12} sm={12} md={4} id="colEditProfile">
                    <Label text="User Type" />
                    <InputSelect label="Select one" />
                </Grid>
                <Grid item xs={12} sm={12} md={4} id="colEditProfile">
                    <Label text="Date of birth" />
                    <InputSimple placeholder="DD/MM/YY" />
                </Grid>
            </Grid>
            <Grid container id="rowEditProfile">
                <Grid item xs={12} sm={12} md={6} id="colEditProfile">
                    <Label text="Address" />
                    <TextArea placeholder="Write here ..." /></Grid>
                <Grid item xs={12} sm={12} md={6} id="colEditProfile">
                    <Label text="Feature Address" />
                    <TextArea placeholder="Write here ..." /> </Grid>
            </Grid>
            <Grid container id="rowEditProfile">
                <Label text="Description" />
                <Grid item xs={12}> <TextArea placeholder="Write here ..." /></Grid>
            </Grid>
            <div className="btnSave">
                <ThemeButton title="Save" style={{ backgroundColor: "#000", color: '#fff', width: "228px", height: "60px", fontSize: "20px", borderRadius: "10px" }} />
            </div>
        </div>
    </>
}

export default EditProfile