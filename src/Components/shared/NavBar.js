import React, {useState} from 'react';
import { Link, Redirect } from "react-router-dom";
import Axios from "axios";
import "./NavBar.scss"


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
            <div><img className="nav-logo" src="" alt="Logo" />  <h1>Connecting Minds </h1></div>
            <div className="menu-icon" onClick={handleClick}> <i className={clicked ? "fas fa-times":"fas fa-bars" }></i> </div>
            {isLoggedIn ? (
<<<<<<< HEAD
                <ul className={clicked ? "nav-menu active" : "nav-menu"}>
                    <li >
                        <Link to='/' className="nav-links">Home</Link>
                    </li>
                    <li >
                        <Link to='/user_profile' className="nav-links">My Profile</Link>
=======
                <ul>
                    <li>
                        <Link to='/user_profile'>My Profile</Link>
>>>>>>> a2e4cf9adb7a7407a333140d2637306dbd970101
                    </li>
                    <li >
                        <button className="nav-links" onClick={logout}>Logout</button>
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