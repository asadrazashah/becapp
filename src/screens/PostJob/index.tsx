import React, { useState } from "react";
import PickupAddress from "./PickupAddress";
import PickupContact from "./PickupContact";
import PickupDetails from "./PackageDetails";
import Preview from "./Preview";
import DescriptionPage from "../../components/DescriptionPage";

const PostJob: React.FC = () => {
    const [step, setStep] = useState(1);
    const next = () => {
        setStep(step + 1);
    }
    const previous = () => {
        setStep(step - 1);
    }
    const renderStep = () => {
        switch (step) {
            case 1:
                return <PickupAddress next={next} />;
            case 2:
                return <PickupContact next={next} previous={previous} />
            case 3:
                return <PickupDetails next={next} previous={previous} />
            case 4:
                return <Preview previous={previous} />
            default:
                return <PickupAddress next={next} />
        }
    }
    return <>
        <DescriptionPage title="POST A JOB" link="POST A JOB" />
        {renderStep()}
    </>
}

export default PostJob;