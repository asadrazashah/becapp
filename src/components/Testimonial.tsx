import React from "react";
import Avatar from "../assets/norm_avatar.png";
import "../styles/components/testimonial.scss";

interface IProps {
    overlay?: string;
}
const Testimonial: React.FC<IProps> = ({ overlay }) => {
    const getColor = () => {
        return overlay === "dark" ? "#fff" : "#000";
    }
    return <div className={`wrapperTestimonial ${overlay}`}>
        <div className="testimonialContent">
            <img src={Avatar} alt="testimonial" />
            <p style={{ color: getColor() }}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
            erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
 tation ullamcorper suscipit lobortis nisl ut aliquip.</p>
            <h4 style={{ color: getColor() }}>Bushra Ansari</h4>
        </div>
    </div>
}
export default Testimonial;