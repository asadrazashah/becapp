import React from "react";
import HeadingTypography from "../../components/HeadingTypography";
import { Grid, FormControlLabel, Radio, RadioGroup } from "@material-ui/core";
import ThemeButton from "../../components/ThemeButton";
import AddressDetail from "./AddressDetail";
import Label from "../../components/Label";
import InputSimple from "../../components/InputSimple";
import "../../styles/screens/post_job.scss";

interface IProps {
    next: () => void;
    previous: () => void;
}
const PickupContact: React.FC<IProps> = ({ next, previous }) => {
    return <>
        <HeadingTypography frontText="PICKUP ADDRESS" backText="PICKUP ADDRESS" />
        <div className="pickupAddressForm">
            <div>
                <AddressDetail width="30%" />
            </div>
            <div className="formGroupJob">
                <Label text="Pickup Contact" bold={true} />
                <RadioGroup style={{ display: "flex" }}>
                    <FormControlLabel value="female" control={<Radio style={radioBtn} />} label="Me" />
                    <FormControlLabel value="male" control={<Radio style={radioBtn} />} label="Some one else" />
                </RadioGroup>
            </div>
            <Grid container>
                <Grid item xs={12} sm={12} md={6}>
                    <div className="formGroupJob">
                        <Label text="Name" />
                        <InputSimple placeholder="Write here ..." />
                    </div>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <div className="formGroupJob">  <Label text="Mobile Number" />
                        <InputSimple placeholder="Write here ..." />
                    </div>
                </Grid>
            </Grid>
            <div className="btnEnd">
                <ThemeButton onClick={previous} title="Back" style={{ backgroundColor: "#fff", color: '#000', width: "228px", height: "60px", fontSize: "20px", borderRadius: "8px", marginRight: "10px" }} />
                <ThemeButton onClick={next} title="Next" style={{ backgroundColor: "#000", color: '#fff', width: "228px", height: "60px", fontSize: "20px", borderRadius: "8px" }} />
            </div>
        </div>
    </>
}
const radioBtn = {
    color: "#8f511d"
}
export default PickupContact;