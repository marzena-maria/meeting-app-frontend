import React, {useState} from 'react';
import { Link, Redirect } from "react-router-dom";
import Axios from "axios";
import "./NavBar.scss"
import LogoCm from "../Slider/meetUpImages/logoCm.png"


const Navbar= ()=> {
    
    let isLoggedIn = false;
    const [logoutResponse, setLogoutResponse] = useState(false);
    const [clicked,setClicked]=useState(false);

    const handleClick=()=>{
        setClicked(!clicked)
        console.log(setClicked)
    }

    if (window.localStorage.length > 0 && window.localStorage.getItem("loggedIn") !== null) {
        isLoggedIn = JSON.parse(window.localStorage.getItem("loggedIn"));
    }


    const logout = async() => {
    
        const response = await Axios.post("/user/logout")
         
        if (response) {
            window.localStorage.setItem("loggedIn",JSON.stringify(false));
            setLogoutResponse(true);
        }
    }

    return (
        <div className="navbar" >
            {logoutResponse ? <Redirect to="/" /> : ''}
            <div className="logo-heading">
                <img className="nav-logo " src={LogoCm} alt="Logo" />  
                <h1 className="heading">Connecting Minds </h1>
            </div>
            <div className="menu-icon" onClick={handleClick}> <i className={clicked ? "fas fa-times":"fas fa-bars" }></i> </div>
            {isLoggedIn ? (
                <ul className={clicked ? "nav-menu active" : "nav-menu"}>
                    <li >
                        <Link to='/' className="nav-links">Home</Link>
                    </li>
                    <li >
                        <Link to='/user_profile' className="nav-links">My Profile</Link>
                    </li>
                    <li >
                        <button className="button nav-links" onClick={logout}>Logout</button>
                    </li>
                </ul>
            ) : (
                <ul className={clicked ? "nav-menu active" : "nav-menu"}>
                    <li >
                        <Link to='/' className="nav-links">Home</Link>
                    </li>
                    <li >
                        <Link to='/register' className="nav-links">Register</Link>
                    </li>
                    <li >
                    <Link to='/login' className="nav-links">Login</Link>
                    </li>
                </ul>
            )}
        </div>
        
    )
}
 
export default Navbar