import React from "react";
import HeadingTypography from "../../components/HeadingTypography";
import { Grid } from "@material-ui/core";
import ThemeButton from "../../components/ThemeButton";
import Label from "../../components/Label";
import InputSimple from "../../components/InputSimple";
import TextArea from "../../components/TextArea";
import "../../styles/screens/post_job.scss";

interface IProps {
    next: () => void;
}
const PickupAddress: React.FC<IProps> = ({ next }) => {
    return <>
        <div className="mapPostJob">
        </div>
        <HeadingTypography frontText="PICKUP ADDRESS" backText="PICKUP ADDRESS" />
        <div className="pickupAddressForm">
            <Grid container>
                <Grid item xs={12} sm={12} md={6}>
                    <div className="formGroupJob">
                        <Label text="Address Location Using Gps" />
                        <InputSimple placeholder="Write here ..." />
                    </div>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <div className="formGroupJob">  <Label text="Address Details" />
                        <InputSimple placeholder="Write here ..." />
                    </div>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <div className="formGroupJob">
                        <Label text="Address Details" />
                        <TextArea placeholder="Write here ..." />
                    </div>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <div className="formGroupJob">
                        <Label text="Address Details" />
                        <TextArea placeholder="Write here ..." />
                    </div>
                </Grid>
            </Grid>
            <div className="btnEnd">
                <ThemeButton onClick={next} title="View All" style={{ backgroundColor: "#000", color: '#fff', width: "228px", height: "60px", fontSize: "20px" }} borderRadius="withRadius" />
            </div>
        </div>
    </>
}

export default PickupAddress;