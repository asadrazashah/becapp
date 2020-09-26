import React from "react";
import HeadingTypography from "../../components/HeadingTypography";
import { Grid, FormControlLabel, Radio, RadioGroup } from "@material-ui/core";
import ButtonLarge from "../../components/ButtonLarge";
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
            <Grid container>
                <Grid item xs={12} sm={12} md={4}>
                    <AddressDetail />
                </Grid>
            </Grid>
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
                <ButtonLarge onClick={previous} title="Back" color="white" mr />
                <ButtonLarge onClick={next} title="Next" color="black" mr />
            </div>
        </div>
    </>
}
const radioBtn = {
    color: "#8f511d"
}
export default PickupContact;