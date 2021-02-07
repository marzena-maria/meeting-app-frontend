import React, { useState, useContext } from "react";
import Axios from "axios";
import { useHistory } from "react-router-dom";
import { NotificationContext } from "../../Notifications";
import NavBar from "../../shared/NavBar"
import "./Register.scss"

function Register() {
  const setMessage = useContext(NotificationContext);
  console.log(setMessage);

  const history = useHistory();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("N/A");
  const [age, setAge] = useState(0);
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [bio, setBio] = useState("");
  // const [error,setError] = useState("")

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
      console.log(error)
      if(!username || !email || !password){
        setMessage(
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
      <h1 >Register</h1>
      <div className="form">
      <div className="form-group">
        <label>Username* :</label>
        <input
          type="text"
          required={true}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <br />
      <div className="form-group">
        <label>Email* :</label>
        <input
          type="email"
          required={true}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <br />
      <div className="form-group">
        <label>Password* :</label>
        <input
          type="text"
          required={true}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <br />
      <div className="form-group">
        <label>Gender:</label>
        <select
          type="text"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="Male" key="">
            Male
          </option>
          <option value="Female" key="">
            Female
          </option>
          <option value="Others" key="">
            Others
          </option>
          <option value="N/A" key="">
            N/A
          </option>
        </select>
      </div>
      <br />
      <div className="form-group">
        <label>Age:</label>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(parseInt(e.target.value))}
        />
      </div>
      <br />
      <div className="form-group">
        <label>City:</label>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </div>
      <br />
      <div className="form-group">
        <label>Country:</label>
        <input
          type="text"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
      </div>
      <br />
      <div className="form-group">
        <label>Bio:</label>
        <textarea
          cols="30"
          rows="10"
          type="text"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />
      </div>
      <br />
      <button onClick={register}>Register</button>
    </div>
    </div>
    
    </div>
  );
}

export default Register;
