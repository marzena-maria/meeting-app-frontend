import React, { useState,useEffect,useContext} from 'react';
// import { Link, Redirect } from "react-router-dom";
import Axios from "axios";
import NavBar from "../shared/NavBar";
import './UserProfile.scss';
import { NotificationContext } from "../Notifications";
import Footer from "../shared/Footer"


function UserProfile() {
    const setMessage = useContext(NotificationContext);

//     const [userData, setUserData] = useState({
//         photo:"",
//         username:"",
//         email:"",
//         gender:"",
//         age:0,
//         city:"",
//         country:"",
//         bio:"",

//     });
//     const {
//         photo,
//         username,
//         email,
//         gender,
//         age,
//         city,
//         country,
//         bio, 
//     } = userData

//    const changeHandler = (e)=>{
//     setUserData({ ...userData , [e.target.name]:e.target.value})
//    }
    const [user, setUser] = useState("");
    const [loading, setLoading] = useState(true);
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
       const config={
           withCredentials:true,
        //    headers:{"Content-type":"application/json"},
       }
        const response = await Axios.get("/user/get-auth-user",config)

        if (response.data.status !== false) {
            setUserData(response.data.user);

              



            // setFirstName(user.firstName);
            // setLastName(user.lastName);
            // setEmail(user.email);
            // setAge(user.age);
            // setCity(user.city);
            // setCountry(user.country);
            // setTelephone(user.telephone);
            // setGender(user.gender);
            // setBio(user.bio);

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
            setMessage(
                'Update failed',
                'error'
            );
        } else {
            setMessage(
                'Update succeed',
                'success'
            );
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
            case 'firstName':
                setFirstName(value);
                user.firstName = value;
                break;
            case 'lastName':
                setLastName(value);
                user.lastName = value;
            case 'email':
                setEmail(value);
                user.email = value;
            case 'age':
                setAge(value);
                user.age = value;
                break;
            case 'city':
                setCity(value);
                user.city = value;
                break;
            case 'country':
                setCountry(value);
                user.country = value;
                break;
            case 'telephone':
                setTelephone(value);
                user.telephone = value;
                break;
            case 'gender':
                setGender(value);
                user.gender = value;
                break;
            case 'bio':
                setBio(value);
                user.bio = value;
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
                            <h1>{user.username}</h1>

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
    //                 <div className="clear"></div>
    //             </div>
    //             <Footer />
    //         </div>
    //     )
    // } else {
    //     get_auth_user_data();

    //     return (<div>
    //         <NavBar /> 
    //         <p>Loading... </p>
    //         <Footer />
    //     </div>);
    // }
}

export default UserProfile