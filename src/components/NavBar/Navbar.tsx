
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { IoSearchSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
    return (
        <>
            <nav className="nav">
                <NavLink to={""} className="logoWrapper">
                    <div className="logo">
                        Reyna
                    </div>
                </NavLink>
                <div className="navCenter">
                <div className="inputWrapper">
                    < IoSearchSharp/>
                    <input type="text" placeholder="Search" />
                    
                </div>
                <button>Search</button>
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
                <GiHamburgerMenu className="hamburger" fill="#fff"/>
            </nav>
        </>
    )
}

export default Navbar
