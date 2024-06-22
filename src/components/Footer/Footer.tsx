import { NavLink } from "react-router-dom";
import "./footer.css";

const Footer = () => {
    return (
        <>
            <div className="footerWrapper">
                <div className="footerContent">
                    <p>Reyna</p>
                    <NavLink to={""}>About</NavLink>
                    <NavLink to={""}>Careers</NavLink>
                    <NavLink to={""}>Affilates</NavLink>
                    <NavLink to={""}>Media</NavLink>
                    <NavLink to={""}>Investors</NavLink>
                </div>
                <div className="footerContent">
                    <p>Support</p>
                    <NavLink to={""}>Merchant support</NavLink>
                    <NavLink to={""}>Help center</NavLink>
                    <NavLink to={""}>Feedback</NavLink>
                    <NavLink to={""}>Reyna Community</NavLink>
                    <NavLink to={""}>Reyna Events</NavLink>
                </div>
                <div className="footerContent">
                    <p>Products</p>
                    <NavLink to={""}>Post Items</NavLink>
                    <NavLink to={""}>Subscriptiom</NavLink>
                    <NavLink to={""}>Reyna Plus</NavLink>
                    <NavLink to={""}>Reyna Network</NavLink>
                    <NavLink to={""}>Reyna for enterprise</NavLink>
                </div>
            </div>
        </>
    )
}

export default Footer
