import React from 'react'
import {Redirect, Route} from "react-router-dom";

function PrivateRoute(props) {


    const isLoggedIn = JSON.parse(window.localStorage.getitem("loggedIn"))
    return (
        <div>
          {isLoggedIn ? (<Route {...props}/>) :(<Redirect to={{pathname:"/login"}}/>)}
        </div>
    )
}

export default PrivateRoute
