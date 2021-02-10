import React, { useState, useContext } from "react";
import Axios from "axios";
import { useHistory } from "react-router-dom";
import { NotificationContext } from "../../Notifications";
import NavBar from "../../shared/NavBar"
import "./Register.scss"

function Register() {
  const setNotification = useContext(NotificationContext);

  const history = useHistory();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("N/A");
  const [age, setAge] = useState(0);
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [bio, setBio] = useState("");
  const [isPasswordShown,setIsPasswordShown] = useState(false);
  // const [error,setError] = useState("")



  const toggleVisibility=()=>{
    setIsPasswordShown(!isPasswordShown)
  }
  const register = async () => {
    console.log(typeof age);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
   try{
      const response = await Axios.post(
        "/user/register",
        {
          username,
          email,
          password,
          gender,
          age,
          city,
          country,
          bio,
        },
        config
      );

      console.log(43535345,response);
     
      if (response) {
        console.log(response);

        history.push("/login");
      }
    }catch(error){
      if(!username || !email || !password){
        setNotification(
          "Every field should be valid and fields with * should not be empty"
        );
      }
      
    }
   
  };

  return (
    <div>
      <div>
      <NavBar />
      </div>
    
    <div className="register">
   
      <div className="form">
      <h1 >Register</h1>
      <div className="form-group">
        <label className="label">Username <span> * </span> : </label>
        <input className="input-field"
          type="text"
          required={true}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
     
      <div className="form-group">
        <label className="label">Email<span>*</span>:</label>
        <input className="input-field"
          type="email"
          required={true}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      
      <div className="form-group">
        <label className="label">Password <span>*</span>  :</label>
        <input className="input-field"
          type={isPasswordShown ? "text" : "password"}
          required={true}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
         <i className={`far ${isPasswordShown ? "fa-eye" : "fa-eye-slash"}`} onClick={toggleVisibility} ></i>
      </div>
     
      <div className="form-group">
        <label className="label">Gender:</label>
        <select className="input-field"
          type="text"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="Male">
            Male
          </option>
          <option value="Female">
            Female
          </option>
          <option value="Others">
            Others
          </option>
          <option value="N/A">
            N/A
          </option>
        </select>
      </div>
      
      <div className="form-group">
        <label className="label">Age:</label>
        <input className="input-field"
          type="number"
          value={age}
          onChange={(e) => setAge(parseInt(e.target.value))}
        />
      </div>
     
      <div className="form-group">
        <label className="label">City:</label>
        <input className="input-field"
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </div>
     
      <div className="form-group">
        <label className="label">Country:</label>
        <input className="input-field"
          type="text"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
      </div>
     
      <div className="form-group">
        <label className="label">Bio:</label>
        <textarea 
          cols="20"
          rows="8"
          type="text"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />
      </div>
      
      <button onClick={register}>Register</button>
    </div>
    </div>
    
    </div>
  );
}

export default Register;
