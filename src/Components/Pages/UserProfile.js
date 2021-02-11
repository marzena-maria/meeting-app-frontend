import React, { useState, useContext, useEffect } from 'react';
import { Link } from "react-router-dom";
import Axios from "axios";
import NavBar from "../shared/NavBar";
import './UserProfile.scss';
import { NotificationContext } from "../Notifications";
import Footer from "../shared/Footer"

import FileUpload from "./FileUpload";



function UserProfile() {
    const setMessage = useContext(NotificationContext);

    const [loading, setLoading] = useState(true);
    const [username, setUsername] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [telephone, setTelephone] = useState('');
    const [gender, setGender] = useState('');
    const [bio, setBio] = useState('');
    const [eventsOrganized, setEventsOrganized] = useState('');
    const [eventsAttended, setEventsAttended] = useState('');

    const get_auth_user_data = async () => {
        const response = await Axios.get("/user/get-auth-user")

        if (response.data.status !== false) {
            const user = response.data.user;

            setUsername(user.username);
            setFirstName(user.firstName);
            setLastName(user.lastName);
            setEmail(user.email);
            setAge(user.age);
            setCity(user.city);
            setCountry(user.country);
            setTelephone(user.telephone);
            setGender(user.gender);
            setBio(user.bio);

            // Get events organized by auth user
            events_organized();

            // Get events attended by auth user
            events_attended();
        }
    }



    const update = async (e) => {
        e.preventDefault();
        const response = await Axios.post("/user/update-user", {
            firstName,
            lastName,
            email,
            age,
            city,
            country,
            telephone,
            gender,
            bio
        });

        if (response.data.status === false) {
            setMessage(
                'Update failed...',
                'error'
            );
        } else {
            setMessage(
                'Update succeed',
                'success'
            );
        }
    }

    const events_organized = async () => {

        const response = await Axios.get("/events/get-organized-events/")

        if (response.data.status === true) {
            setEventsOrganized(response.data.events);
        } else {
            console.log('Failed to get user`s events');
        }
    }

    const events_attended = async () => {
        const response = await Axios.get("/events/get-attended-events/")

        if (response.data.status === true) {
            setEventsAttended(response.data.events);
        } else {
            console.log('Failed to get user`s events');
        }

        setLoading(false);
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

    useEffect(() => {
        get_auth_user_data();
    }, [])

    function handleUserChange(fieldName, value) {

        switch (fieldName) {
            case 'firstName':
                setFirstName(value);
                break;
            case 'lastName':
                setLastName(value);
                //user.lastName = value;
                break;
            case 'email':
                setEmail(value);
                //user.email = value;
                break;
            case 'email':
                setEmail(value);
                break;
            case 'age':
                setAge(value);
                break;
            case 'city':
                setCity(value);
                break;
            case 'country':
                setCountry(value);
                break;
            case 'telephone':
                setTelephone(value);
                break;
            case 'gender':
                setGender(value);
                break;
            case 'bio':
                setBio(value);
                break;
            default:
                console.log('Impossible to update field ' +  fieldName + ' with value ' + value);
        }
    }

    if (loading === false) {
        return (
            <div>
                <NavBar />
                <div id="container">
                    <div className="user_details user_panel">
                        <div className="user_details_pp"></div>
                        <div className="user_details_inputs">
                            <h1>{username}</h1>

                          

                             <div>
                               <FileUpload />
                            </div>


                            <label>
                                <span>First name: </span>
                                <input type="text" name="firstName" value={firstName} onChange={(e) => handleUserChange('firstName', e.target.value)} />
                            </label>
                            <br />

                            <label>
                                <span>Last name: </span>
                                <input type="text" name="lastName" value={lastName} onChange={(e) => handleUserChange('lastName', e.target.value)} />
                            </label>
                            <br />

                            <label>
                                <span>Email: </span>
                                <input type="email" name="email" value={email} onChange={(e) => handleUserChange('email', e.target.value)} />
                            </label>
                            <br />

                            <label>
                                <span>Age: </span>
                                <input type="number" name="age" value={age} onChange={(e) => handleUserChange('age', e.target.value)} />
                            </label>
                            <br />

                            <label>
                                <span>City: </span>
                                <input type="text" name="city" value={city} onChange={(e) => handleUserChange('city', e.target.value)} />
                            </label>
                            <br />

                            <label>
                                <span>Country: </span>
                                <input type="text" name="country" value={country} onChange={(e) => handleUserChange('country', e.target.value)} />
                            </label>
                            <br />

                            <label>
                                <span>Telephone: </span>
                                <input type="text" name="telephone" value={telephone} onChange={(e) => handleUserChange('telephone', e.target.value)} />
                            </label>
                            <br />

                            <label>
                                <span>Gender: </span>
                                <input type="text" name="gender" value={gender} onChange={(e) => handleUserChange('gender', e.target.value)} />
                            </label>
                            <br />

                            <label>
                                <span>Bio: </span>
                                <textarea value={bio} onChange={(e) => handleUserChange('bio', e.target.value)} />
                            </label>
                            <br />

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
                    <div className="clear"></div>
                </div>
                <Footer />
            </div>
        )
    } else {


        return (<div>
            <NavBar /> 
            <p>Loading... </p>
            <Footer />
        </div>);
    }
}

export default UserProfile