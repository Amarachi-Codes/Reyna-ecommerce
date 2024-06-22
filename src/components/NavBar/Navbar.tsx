
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    return (
        <>
            <nav className="nav">
                <NavLink to={""} className="logoWrapper">
                    <div className="logo">
                        Reyna
                    </div>
                </NavLink>
                <div className="inputWrapper">
                    <input type="text" placeholder="Search" />
                </div>
                <div className="navRight">
                    <ul>
                        <NavLink to={""}>Home</NavLink>
                        <NavLink to={""}>Create</NavLink>
                        <NavLink to={""}>Notification</NavLink>
                        <NavLink to={""}>Login</NavLink>
                        <NavLink to={""}>Signup</NavLink>
                        <NavLink to={""}>Profile</NavLink>
                    </ul>

                </div>

            </nav>
        </>
    )
}

export default Navbar
