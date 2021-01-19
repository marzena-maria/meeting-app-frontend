import React from 'react'
import {Link } from 'react-router-dom'

const Navbar= ()=> {
    return (
        <div >
            <h1><img src="" alt="Logo" />   </h1>
            <ul>
                {/* <li>
                    <Link to='/' >Home </Link>
                </li>
                <li>
                    <Link to='/about' >About </Link>
                </li> */}
                <li>
                    <Link to='/register' >Register </Link>
                </li>
                <li>
                    <Link to='/login' >Login </Link>
                </li>
            </ul>
        </div>
    )
}
 
export default Navbar