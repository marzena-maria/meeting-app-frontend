import React, { useState } from 'react';
import { Link, Redirect } from "react-router-dom";
import Axios from "axios";
import NavBar from "../shared/NavBar";
/*import ProfilePic from "./" IMPORTER L IMAGE DU PROFILE EN QUESTION*/


function UserProfile() {

    const [user, setUser] = useState("");
    const [loading, setLoading] = useState(true);
    const [username, setUsername] = useState('');
    const [city, setCity] = useState('');
    const [age, setAge] = useState('');
    const [eventsOrganized, setEventsOrganized] = useState('');
    const [eventsAttended, setEventsAttended] = useState('');

    const get_auth_user_data = async () => {
        const response = await Axios.get("/user/get-auth-user")

        if (response.data.status !== false) {
            setUser(response.data.user);

            setUsername(response.data.user.username);
            setCity(response.data.user.city);
            setAge(response.data.user.age);

            // Get events organized by auth user
            events_organized();

            // Get events attended by auth user
            events_attended();
        }

        setLoading(false);
    }

    const update = async () => {
        const response = await Axios.post("/user/update-user", { user })

        if (response.data.status === false) {
            console.log('Update failed');
        } else {
            console.log('Update succeed');
        }
    }

    const events_organized = async () => {

        const response = await Axios.get("/events/get-organized-events/", { 
            params: {
                user: user
            }
        })

        if (response.data.status === true) {
            setEventsOrganized(response.data.events);
        } else {
            console.log('Failed to get user`s events');
        }
    }

    const events_attended = async () => {
        const response = await Axios.get("/events/get-attended-events/", { 
            params: {
                user: user
            }
        })

        if (response.data.status === true) {
            setEventsAttended(response.data.events);
        } else {
            console.log('Failed to get user`s events');
        }
    }

    const renderEvents = (eventType) => {

        let events = false;

        switch (eventType) {
            case 'organized':
                events = eventsOrganized;
                break;
            default:
                events = eventsAttended;
        }

        if (events) {
            return (<ul>
                {events.map((event, i) => {
                    let eventDate = new Date(event.startingDate);
                    return (<li key={i.toString()}> <span className="eventName">{event.eventName}</span> <span className="eventDate">{eventDate.toGMTString().toUpperCase()}</span> </li>);
                })}
            </ul>)
        } else {
            return (<p> No event found. </p>);
        }
    }

    function handleUserChange(fieldName, value) {

        switch (fieldName) {
            case 'city':
                setCity(value);
                user.city = value;
                break;
            case 'age':
                setAge(value);
                user.age = value;
                break;
            default:
                setUsername(value);
                user.username = value;
        }
    }

    if (loading === false) {
        return (
            <div id="container">
                <NavBar />  
                <div className="user_details user_panel">
                    <div className="user_details_pp"></div>
                    <div className="user_details_inputs">
                        <h1>{user.firstName}</h1>
                        <input type="text" name="username" value={username} onChange={(e) => handleUserChange('username', e.target.value)} /> <br />
                        <input type="text" name="city" value={city} onChange={(e) => handleUserChange('city', e.target.value)} /><br />
                        <input type="text" name="age" value={age} onChange={(e) => handleUserChange('age', e.target.value)} /><br />
                        <button onClick={update}>Update</button>
                    </div>
                </div>
                <div className="user_events_attend user_panel">
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
                </div>
            </div>
        )
    } else {
        get_auth_user_data();

        return (<div>
            <NavBar /> 
            <p>Loading... </p>
        </div>);
    }
}

export default UserProfile