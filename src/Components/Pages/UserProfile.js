import React,{useState} from 'react'
import {Link, Redirect} from "react-router-dom";
import Axios from "axios";
/*import ProfilePic from "./" IMPORTER L IMAGE DU PROFILE EN QUESTION*/



function UserProfile() {

    const [user,setUser] = useState("");
    const [redirect,setRedirect] = useState(false);
    const [loading,setLoading] = useState(true);
    const [username,setUsername] = useState('');
    const [city,setCity] = useState('');
    const [age,setAge] = useState('');
    const [eventsOrganized,setEventsOrganized] = useState('');
    

    const auth_user = async() => {
        const response = await Axios.get("/user/get-auth-user")
        
        if (response.data.status === false) {
            setRedirect(true);
        } else {
            setUser(response.data.user);

            setUsername(response.data.user.username);
            setCity(response.data.user.city);
            setAge(response.data.user.age);

            // Get events organized by auth user
            events_organized();
        }

        setLoading(false);
    }

    const update = async() => {
        const response = await Axios.post("/user/update-user", {user})
        
        if (response.data.status === false) {
            console.log('Update failed');
        } else {
            console.log('Update succeed');
        }
    }

    const events_organized = async() => {
        const response = await Axios.get("/events/get-events/", {user})
        
        if (response.data.status === true) {
            setEventsOrganized(response.data.events);
        } else {
            console.log('Failed to get user`s events');
        }
    }

    const renderEventsOrganized = () => {
        if (eventsOrganized) {
            return (<ul>
                {eventsOrganized.map((eventOrganized, i) => {
                    let eventDate = new Date(eventOrganized.startingDate);
                    return (<li key={i.toString()}> <span className="eventName">{eventOrganized.eventName}</span> <span className="eventDate">{eventDate.toGMTString().toUpperCase()}</span> </li>);
                })}
            </ul>)
        } else {
            return (<p> No event organized. </p>);
        }
    }

    function handleUserChange(fieldName, value) {

        switch(fieldName) {
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

        if (redirect === true) {
            return <Redirect to="/login" />;
        }

        return (
            <div id="container">
                <div className="user_details user_panel">
                    <div className="user_details_pp"></div>
                    <div className="user_details_inputs">
                        <h1>{user.firstName}</h1>
                        <input type="text" name="username" value={username} onChange={(e)=>handleUserChange('username', e.target.value)} /> <br/>
                        <input type="text" name="city" value={city} onChange={(e)=>handleUserChange('city', e.target.value)} /><br/>
                        <input type="text" name="age" value={age} onChange={(e)=>handleUserChange('age', e.target.value)} /><br/>
                        <button onClick={update}>Update</button>
                    </div>
                </div>
                <div className="user_events_attend user_panel">
                    <h2>Event I attend</h2>
                        <div className="attended_events">
                        </div>
                        <p><Link to="/events/browse" className="button">Browse New Events</Link>
                        </p>
                </div>
                <div className="user_events_organize user_panel">
                    <h2>Events I organise</h2>
                        <div className="organized_events">
                            { renderEventsOrganized() }
                        </div>
                        <p><Link to="/events/create" className="button">Create New Event</Link>
                        </p>
                </div>            
            </div> 
        )
    } else {
        auth_user();
        
        return ( <div> Loading... </div> );
    }    
}

export default UserProfile