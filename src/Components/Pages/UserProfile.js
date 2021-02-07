import React, { useState,useEffect } from 'react';
import { Link, Redirect } from "react-router-dom";
import Axios from "axios";
import NavBar from "../shared/NavBar";
/*import ProfilePic from "./" IMPORTER L IMAGE DU PROFILE EN QUESTION*/


function UserProfile() {

    const [userData, setUserData] = useState({
        photo:"",
        username:"",
        email:"",
        gender:"",
        age:0,
        city:"",
        country:"",
        bio:"",

    });
    const {
        photo,
        username,
        email,
        gender,
        age,
        city,
        country,
        bio, 
    } = userData

   const changeHandler = (e)=>{
    setUserData({ ...userData , [e.target.name]:e.target.value})
   }
    const get_auth_user_data = async () => {
       const config={
           withCredentials:true,
        //    headers:{"Content-type":"application/json"},
       }
        const response = await Axios.get("/user/get-auth-user",config)

        if (response.data.status !== false) {
            setUserData(response.data.user);

              




            // // Get events organized by auth user
            // events_organized();

            // // Get events attended by auth user
            // events_attended();
        }

   
    }
    useEffect(() => {
        get_auth_user_data();
        
     }, [])

    const update = async () => {
        const response = await Axios.post("/user/update-user", { userData })

        if (response.data.status === false) {
            console.log('Update failed');
        } else {
            console.log('Update succeed');
        }
    }

    // const events_organized = async () => {

    //     const response = await Axios.get("/events/get-organized-events/", { 
    //         params: {
    //             user: user
    //         }
    //     })

    //     if (response.data.status === true) {
    //         setEventsOrganized(response.data.events);
    //     } else {
    //         console.log('Failed to get user`s events');
    //     }
    // }

    // const events_attended = async () => {
    //     const response = await Axios.get("/events/get-attended-events/", { 
    //         params: {
    //             user: user
    //         }
    //     })

    //     if (response.data.status === true) {
    //         setEventsAttended(response.data.events);
    //     } else {
    //         console.log('Failed to get user`s events');
    //     }
    // }

    // const renderEvents = (eventType) => {

    //     let events = false;

    //     switch (eventType) {
    //         case 'organized':
    //             events = eventsOrganized;
    //             break;
    //         default:
    //             events = eventsAttended;
    //     }

    //     if (events) {
    //         return (<ul>
    //             {events.map((event, i) => {
    //                 let eventDate = new Date(event.startingDate);
    //                 return (<li key={i.toString()}> <span className="eventName">{event.eventName}</span> <span className="eventDate">{eventDate.toGMTString().toUpperCase()}</span> </li>);
    //             })}
    //         </ul>)
    //     } else {
    //         return (<p> No event found. </p>);
    //     }
    // }

    // function handleUserChange(fieldName, value) {

    //     switch (fieldName) {
    //         case 'city':
    //             setCity(value);
    //             user.city = value;
    //             break;
    //         case 'age':
    //             setAge(value);
    //             user.age = value;
    //             break;
    //         default:
    //             setUsername(value);
    //             user.username = value;
    //     }
    // }

    // if (loading === false) {
        return (
            <div id="container">
                <NavBar />  
                <div className="user_details user_panel">
                    <div className="user_details_pp"></div>
                    <div className="user_details_inputs">
                        {/* <h1>{user.firstName}</h1> */}
                        <label>Photo:</label>
                        <input type="file" name="photo" value={photo} onChange={(e) => changeHandler( e.target.value)} /> <br />
                        <label>UserName</label>
                        <input type="text" name="username" value={username} onChange={(e) => changeHandler( e.target.value)} /> <br />
                        <label>Email</label>
                        <input type="email" name="email" value={email} onChange={(e) =>changeHandler( e.target.value)} /><br />
                        <label>Age</label>
                        <input type="number" name="age" value={age} onChange={(e) => changeHandler( e.target.value)} /><br />
                        <label>Gender</label>
                        <input type="text" name="gender" value={gender} onChange={changeHandler} /><br />
                        <label>City</label>
                        <input type="text" name="city" value={city} onChange={changeHandler} /><br />                
                        <label>Country</label>
                        <input type="text" name="country" value={country} onChange={changeHandler} /><br />
                        <label>Bio</label>
                        <textarea type="text" name="bio" value={bio} onChange={changeHandler} /><br />
                        <button onClick={update}>Update</button>
                    </div>
                </div>
                {/* <div className="user_events_attend user_panel">
                    <h2>Event I attend</h2>
                    <div className="attended_events">
                        {renderEvents('attended')}
                    </div>
                    <p><Link to="/" className="button">Browse New Events</Link>
                    </p>
                </div>
                <div className="user_events_organize user_panel">
                    <h2>Events I organise</h2>
                    <div className="organized_events">
                        {renderEvents('organized')}
                    </div>
                    <p><Link to="/event-form" className="button">Create New Event</Link>
                    </p>
                </div> */}
            </div>
        )
    // } else {
    //     get_auth_user_data();

    //     return (<div>
    //         <NavBar /> 
    //         <p>Loading... </p>
    //     </div>);
    // }
}

export default UserProfile