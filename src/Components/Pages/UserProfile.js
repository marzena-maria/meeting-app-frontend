import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import NavBar from "../shared/NavBar";
import "./UserProfile.scss";
import { NotificationContext } from "../Notifications";
import Footer from "../shared/Footer";

function UserProfile() {
  const setMessage = useContext(NotificationContext);

  const [user, setUser] = useState("");
  //   const [loading, setLoading] = useState(true);
  //   const [firstName, setFirstName] = useState("");
  //   const [lastName, setLastName] = useState("");
  //   const [email, setEmail] = useState("");
  //   const [age, setAge] = useState("");
  //   const [city, setCity] = useState("");
  //   const [country, setCountry] = useState("");
  //   const [telephone, setTelephone] = useState("");
  //   const [gender, setGender] = useState("");
  //   const [bio, setBio] = useState("");
  const [eventsOrganized, setEventsOrganized] = useState("");
  const [eventsAttended, setEventsAttended] = useState("");

  const [userData, setUserData] = useState({
    
  });
  const {
    photo,
    firstName,
    lastName,
    username,
    email,
    gender,
    age,
    city,
    country,
    bio,
  } = userData;

  const [file, setFile] = useState("");
  const [fileName, setFileName] = useState("");
  const [uploadFile, setUploadFile] = useState({});

  const get_auth_user_data = async () => {
    const config = {
      withCredentials: true,
      // headers:{"Content-type":"application/json"},
    };
    const response = await axios.get("/user/get-auth-user", config);
    

    if (response  !== null) {
      console.log('user :',  response.data.user);
      setUserData(response.data.user);

      // const response = await Axios.get("/user/get-auth-user");

      // if (response.data.status !== false) {
      //   setUser(response.data.user);

      //   setFirstName(user.firstName);
      //   setLastName(user.lastName);
      //   setEmail(user.email);
      //   setAge(user.age);
      //   setCity(user.city);
      //   setCountry(user.country);
      //   setTelephone(user.telephone);
      //   setGender(user.gender);
      //   setBio(user.bio);

      // Get events organized by auth user
      events_organized();

      // Get events attended by auth user
      events_attended();
    }

    // setLoading(false);
  };
  useEffect(() => {
    get_auth_user_data();
  }, []);

  const update = async () => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("username", username);
    formData.append("email", email);
    formData.append("age", age);
    formData.append("gender", gender);
    formData.append("city", city);
    formData.append("country", country);
    formData.append("bio", bio);

    const config = {
      headers: {
        Accept:'application/json',
        "Content-Type": "multipart/form-data",
      },
      withCredentials: true,
    };
    try {
      const response = await axios.post("/user/update-user", formData, config);

      
    } catch (error) {
      console.log(error);
    }
  };


  const handleUpdate = async(e) =>{
    e.preventDefault();
    
    try{
    await update(userData);
    await get_auth_user_data();
    }catch(error){
    console.log(error)
    }
    }
  const events_organized = async () => {
    const response = await axios.get("/events/get-organized-events/", {
      params: {
        user: user,
      },
    });

    if (response.data.status === true) {
      setEventsOrganized(response.data.events);
    } else {
      console.log("Failed to get user`s events");
    }
  };

  const events_attended = async () => {
    const response = await axios.get("/events/get-attended-events/", {
      params: {
        user: user,
      },
    });

    if (response.data.status === true) {
      setEventsAttended(response.data.events);
    } else {
      console.log("Failed to get user`s events");
    }
  };

  const renderEvents = (eventType) => {
    let events = false;

    switch (eventType) {
      case "organized":
        events = eventsOrganized;
        break;
      default:
        events = eventsAttended;
    }

    if (events) {
      return (
        <ul>
          {events.map((event, i) => {
            let eventDate = new Date(event.startingDate);
            return (
              <li key={i.toString()}>
                {" "}
                <span className="eventName">{event.eventName}</span>{" "}
                <span className="eventDate">
                  {eventDate.toGMTString().toUpperCase()}
                </span>{" "}
              </li>
            );
          })}
        </ul>
      );
    } else {
      return <p> No event found. </p>;
    }
  };

  function handleUserChange(e) {
    setUserData({ ...userData, [e.target.name]: e.target.value });
    // switch (fieldName) {
    //   case "firstName":
    //     setFirstName(value);
    //     user.firstName = value;
    //     break;
    //   case "lastName":
    //     setLastName(value);
    //     user.lastName = value;
    //   case "email":
    //     setEmail(value);
    //     user.email = value;
    //   case "age":
    //     setAge(value);
    //     user.age = value;
    //     break;
    //   case "city":
    //     setCity(value);
    //     user.city = value;
    //     break;
    //   case "country":
    //     setCountry(value);
    //     user.country = value;
    //     break;
    //   case "telephone":
    //     setTelephone(value);
    //     user.telephone = value;
    //     break;
    //   case "gender":
    //     setGender(value);
    //     user.gender = value;
    //     break;
    //   case "bio":
    //     setBio(value);
    //     user.bio = value;
    //     break;
    //   default:
    //     console.log(
    //       "Impossible to update field " + fieldName + " with value " + value
    //     );
    // }
  }

  const handlePhoto = (e) => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };

  //   if (loading === false) {
  return (
    <div id="container">
      <NavBar />
      <div >
        <div className="user_details user_panel">
          <div className="user_details_pp"></div>
          <div className="user_details_inputs">
            <h1>{user.username}</h1>
            <form onSubmit={handleUpdate}>
            <div>
              {photo && <img style={{width:'100px', height:'100px'}} src={`${photo}`} />}
              <label>{fileName}</label>
              <input
                type="file"
                name="file"
                
                onChange={handlePhoto}
              />
              <br />
            </div>

            <label>
              <span>First name: </span>
              <input
                type="text"
                name="firstName"
                value={firstName}
                onChange={handleUserChange}
              />
            </label>
            <br />

            <label>
              <span>Last name: </span>
              <input
                type="text"
                name="lastName"
                value={lastName}
                onChange={handleUserChange}
              />
            </label>
            <br />
            <label>
              <span>UserName: </span>
              <input
                type="text"
                name="username"
                value={username}
                onChange={handleUserChange}
              />
            </label>
            <br />

            <label>
              <span>Email: </span>
              <input
                type="email"
                name="email"
                value={email}
                onChange={handleUserChange}
              />
            </label>
            <br />

            <label>
              <span>Age: </span>
              <input
                type="number"
                name="age"
                value={age}
                onChange={handleUserChange}
              />
            </label>
            <br />

            <label>
              <span>City: </span>
              <input
                type="text"
                name="city"
                value={city}
                onChange={handleUserChange}
              />
            </label>
            <br />

            <label>
              <span>Country: </span>
              <input
                type="text"
                name="country"
                value={country}
                onChange={handleUserChange}
              />
            </label>
            <br />

            {/* <label>
                <span>Telephone: </span>
                <input
                  type="text"
                  name="telephone"
                  value={telephone}
                  onChange={handleUserChange
                  }
                />
              </label>
              <br /> */}

            <label>
              <span>Gender: </span>
              <input
                type="text"
                name="gender"
                value={gender}
                onChange={handleUserChange}
              />
            </label>
            <br />

            <label>
              <span>Bio: </span>
              <textarea value={bio} onChange={handleUserChange} />
            </label>
            <br />

            <button onClick={update}>Update</button>
            </form>
        </div>
        
        </div>
        <div className="user_events_attend user_panel">
          <h2>Event I attend</h2>
          <div className="attended_events">{renderEvents("attended")}</div>
          <p>
            <Link to="/" className="button">
              Browse New Events
            </Link>
          </p>
        </div>
        <div className="user_events_organize user_panel">
          <h2>Events I organise</h2>
          <div className="organized_events">{renderEvents("organized")}</div>
          <p>
            <Link to="/event-form" className="button">
              Create New Event
            </Link>
          </p>
        </div>
        <div className="clear"></div>
      </div>
     
     
      <Footer />
      </div> 
  
  );
}

export default UserProfile;
