
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { IoSearchSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { TiShoppingCart } from "react-icons/ti";

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <>
            <nav className="nav">
                <NavLink to={""} className="logoWrapper">
                    <div className="logo">
                        <TiShoppingCart fill="#540474"/>Reyna
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
                {showMenu?<IoCloseSharp className="displaynav" fill="#540474" onClick={()=>{setShowMenu(!showMenu)}}/> : <GiHamburgerMenu className="displaynav" fill="#540474" onClick={()=>{setShowMenu(!showMenu)}}/>  }
                {showMenu &&(
                 <div className="hamburger">
                 <ul>
                 <li><NavLink to={"/"}>Home</NavLink></li>
                     <li><NavLink to={"/cart/:id"}>Cart</NavLink></li>
                     <li><NavLink to={"/page/signin"}>SignIn</NavLink></li>
                     <li><NavLink to={""}>SignUp</NavLink></li>
                     <li><NavLink to={""}>LogOut</NavLink></li>
                 </ul>
             </div>   
                )}
                
            </nav>
        </>
    )
}

export default Navbar
