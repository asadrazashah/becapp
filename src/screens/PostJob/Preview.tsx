import React from "react";
import { Grid } from "@material-ui/core";
import AddressDetails from "./AddressDetail";
import HeadingTypography from "../../components/HeadingTypography";
import Label from "../../components/Label";
import ButtonLarge from "../../components/ButtonLarge";
import content from "../../constants/content.json";
import "../../styles/screens/post_job.scss";

interface IProps {
    previous: () => void;
}
const Preview: React.FC<IProps> = () => {
    return <>
        <HeadingTypography frontText="Preview" backText="Preview" />
        <div className="previewJobPost">
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={5}>
                    <Label text="Pickup Address" bold />
                    <AddressDetails />
                </Grid>
                <Grid item xs={12} sm={12} md={5}>
                    <Label text="Delivery Address" bold />
                    <AddressDetails />
                </Grid>
            </Grid>
            <Label text="More Information" bold />
            <Grid container>
                <Grid item xs={6}>
                    <Label text="Name" />
                    <p>Micle</p>
                </Grid>
                <Grid item xs={6}>
                    <Label text="Mobile Number" />
                    <p>+91 - 987 654 3210</p>
                </Grid>
            </Grid>
            <div>
                <Label text="Type of shipping" />
                <p>Shipping with special feature </p>
            </div>
            <div>
                <Label text="About Shipping" />
                <p>{content.aboutShipping}</p>
            </div>
            <Label text="About Package" bold />
            <div>
                <Label text="Weight" />
                <p>1000 KG</p>
            </div>
            <Label text="Dimensions" bold />
            <Grid container>
                <Grid item xs={4}>
                    <Label text="Lengh (cm)" />
                    <p>858 cm</p>
                </Grid>
                <Grid item xs={4}>
                    <Label text="Width (cm)" />
                    <p>50 cm</p>
                </Grid>
                <Grid item xs={4}>
                    <Label text="Height (cm)" />
                    <p>857 cm</p>
                </Grid>
            </Grid>
            <Label text="Vehicle Type" />
            <p>Pickup</p>
            <div className="btnEnd">
                <ButtonLarge title="Back" color="white" mr />
                <ButtonLarge title="Edit" color="golden" mr />
                <ButtonLarge title="Get Quote" color="black" mr />
            </div>
        </div>


    </>
}

export default Preview;