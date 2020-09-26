import React from "react";
import { Grid, Radio, RadioGroup, FormControlLabel } from "@material-ui/core";
import HeadingTypography from "../../components/HeadingTypography";
import Label from "../../components/Label";
import InputSelect from "../../components/InputSelect";
import InputSimple from "../../components/InputSimple";
import TextArea from "../../components/TextArea";
import { AiFillPlusCircle } from 'react-icons/ai';
import { HiOutlineInformationCircle } from "react-icons/hi";
import "../../styles/screens/post_job.scss";
import ButtonLarge from "../../components/ButtonLarge";
interface IProps {
    next: () => void;
    previous: () => void;
}
const PackageDetails: React.FC<IProps> = ({ next, previous }) => {
    return <>
        <HeadingTypography frontText="Package Details" backText="Package Details" />
        <div className="packageDetails">
            <Label text="All items are delivered in our scure,  waterproof deliverybox." />
            <div className="shippingType">
                <Label text="Type of shipping" />
                <InputSelect label="Select Shipping Type" style={inputStyle} />
                <TextArea placeholder="About Shipping" />
            </div>
            <div>
                <Label text="About Package" bold />
                <Grid container>
                    <Grid item xs={12} sm={12} md={6} id="colStyle">
                        <Label text="Shipping Address" />
                        <InputSimple placeholder="Select Shipping Type" />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} id="colStyle">
                        <Label text="Weight ( KG )" />
                        <InputSimple placeholder="Weight KG" />
                    </Grid>
                </Grid>
                <Label text="Dimension" />
                <Grid container>
                    <Grid item xs={12} sm={12} md={4} id="colStyle">
                        <InputSimple placeholder="Length (cm)" />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} id="colStyle">
                        <InputSimple placeholder="Width (cm)" />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} >
                        <InputSimple placeholder="Height (cm)" />
                    </Grid>
                </Grid>
            </div>
            <div className="addMorePackage">
                <h4>Add More Package <span><AiFillPlusCircle style={iconStyle} /></span></h4>
                <Label text="Select Vehicle" />
                <InputSelect label="Select a vehicle" style={inputStyle} />
            </div>
            <div className="pickupContact">
                <h3>Pickup Contact <span><HiOutlineInformationCircle style={iconStyle} /></span></h3>
                <RadioGroup style={{ display: "flex" }}>
                    <FormControlLabel value="meet at door" control={<Radio style={radioBtn} />} label="Meet at door" />
                    <FormControlLabel value="meet out side" control={<Radio style={radioBtn} />} label="Meet out side" />
                    <FormControlLabel value="leave at door" control={<Radio style={radioBtn} />} label="Leave at door" />
                </RadioGroup>
                <Label text="General instructions to the currier" />
                <TextArea placeholder="General instructions for the courier" />
            </div>
            <div className="btnEnd">
                <ButtonLarge title="Back" color="white" mr onClick={previous} />
                <ButtonLarge title="Next" color="black" onClick={next} />
            </div>
        </div>
    </>
}

const inputStyle = {
    width: "50%"
}
const iconStyle = {
    verticalAlign: "middle"
}
const radioBtn = {
    color: "#8f511d"
}

export default PackageDetails;