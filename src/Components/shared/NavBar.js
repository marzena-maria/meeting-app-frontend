import React, {useState} from 'react';
import { Link, Redirect } from "react-router-dom";
import Axios from "axios";

const Navbar= ()=> {
    
    let isLoggedIn = false;
    const [logoutResponse, setLogoutResponse] = useState(false);

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
        <div >
            {logoutResponse ? <Redirect to="/" /> : ''}
            <h1><img src="" alt="Logo" />   </h1>
            {isLoggedIn ? (
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/user_profile'>My Profile</Link>
                    </li>
                    <li>
                        <button onClick={logout}>Logout</button>
                    </li>
                </ul>
            ) : (
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/register'>Register</Link>
                    </li>
                    <li>
                    <Link to='/login'>Login</Link>
                    </li>
                </ul>
            )}
        </div>
    )
}
 
export default Navbar