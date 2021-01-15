import React,{useState} from 'react'
import {Link} from "react-router-dom";
import Axios from "axios";
/*import ProfilePic from "./" IMPORTER L IMAGE DU PROFILE EN QUESTION*/
/*import Gravatar from 'react-gravatar';*/

function UserProfile() {

    const auth_user = async() => {
        const response = await Axios.post("/user/get-auth-user")
        console.log(response.data.user);
        if (response.data.status !== true) {
            // Redirect to /user/login

        } else {
            return response.data.user
        }
    }

    auth_user();

    /**
     * TODO: Update with user info from auth_user
     */

    const [username,setUsername] = useState("celia_bll");
    const [city,setCity] = useState("Hamburg");
    const [age,setAge] = useState("21");


    return (
        <div id="container">
            <div className="user_details user_panel">
                <div className="user_details_pp">{/*<Gravatar email="celia.bouzen@gmail.com"*/}</div>
                <div className="user_details_inputs">
                    <h1>Célia</h1>
                    <input type="text" name="username" value={username} onChange={(e)=>setUsername(e.target.value)} />
                    <input type="text" name="city" value={city} onChange={(e)=>setCity(e.target.value)}></input>
                    <input type="text" name="age" value={age} onChange={(e)=>setAge(e.target.value)}></input>
                </div>
                <button onClick="">Update</button>
            </div>
            <div className="user_events_attend user_panel">
                <h2>Event I attend</h2>
                    <div className="attended_events">XXXXXXXXX
                    </div>
                    <p><Link to="/events/browse" className="button">Browse New Events</Link>
                    </p>
            </div>
            <div className="user_events_organize user_panel">
                <h2>Events I organise</h2>
                    <div className="organized_events">XXXXXXXXXXXXXXXXXXXXXXXXXXX</div>
                    <p><Link to="/events/create" className="button">Create New Event</Link>
                    </p>
            </div>            
        </div> 
    )

    
}

export default UserProfile