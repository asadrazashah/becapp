import React from "react";
import { Grid } from "@material-ui/core";
import HeadingTypography from "../components/HeadingTypography";
import "../styles/screens/track_order.scss";

const TrackOrder: React.FC = () => {
    return <>
        <HeadingTypography backText="ORDER TRACKING" frontText="ORDER TRACKING" />
        <Grid container style={{ padding: "30px 10% 50px 10%" }}>
            <Grid item xs={12} sm={12} md={6}>
                <div className="trackingDetails">
                    <div className="detailsWrapper">
                        <h1>Tracking Address</h1>
                        <h3>Delivery Address</h3>
                        <p>D-44, Subhash Marg, C-Scheme, Jaipur, Rajasthan. Govt. Apvd.
D-44, Subhash Marg, C-Scheme, Jaipur, Rajasthan.</p>
                        <h3>Delivery Address</h3>
                        <p>D-44, Subhash Marg, C-Scheme, Jaipur, Rajasthan. Govt. Apvd.
D-44, Subhash Marg, C-Scheme, Jaipur, Rajasthan.</p>
                    </div>
                </div>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <div className="map">

                </div>
            </Grid>
        </Grid>
    </>

}
export default TrackOrder;