import React from 'react'
import {Redirect, Route} from "react-router-dom";

function PrivateRoute(props) {

    let isLoggedIn = false;

    if (window.localStorage.length > 0 && window.localStorage.getItem("loggedIn") !== null) {
      isLoggedIn = JSON.parse(window.localStorage.getItem("loggedIn"));
    }

    return (
        <div>
          {isLoggedIn ? (<Route {...props}/>) :(<Redirect to={{pathname:"/login"}}/>)}
        </div>
    )
}

export default PrivateRoute
