import React, { useState, useEffect } from "react";
// import styles from "./Resetpasswordpage.module.css";
import axios from 'axios';
import {useParams} from 'react-router-dom'
import NavBar from "../../shared/NavBar";
import Footer from "../../shared/Footer"
import "./GeneratePassword.scss"


function GeneratePassword() {
const {token} = useParams()
const [validToken, setValidToken ] = useState(false); 
const [user, setUser ] = useState({password:"",password2:"", token:""}); 
const sendResetToken = async () =>{

  try {
    const response = await axios.get(`/user/newpassword/${token}` )
    console.log(response.data);
    setValidToken(true)
    setUser({...user, token})
  } catch (error) {
    console.log(error.response.data);
    setValidToken(false)
  }

}

useEffect(() => {
 if(token)  sendResetToken();
 
}, [])

const [password, setPassword] = useState("");
const changePw = (e) => {
  setUser({...user,[e.target.name]:e.target.value})
}

const sendResetPw = async (e) => {
  e.preventDefault()
  const {password, password2} = user
  if (password === ""|| password2 === "") {
    console.log("please enter all the fields", " alert-infos");
} else if (password !== password2) {
  console.log("password do not match", " alert-infos");
} else if (password.length < 7 || password2.length < 7) {
    console.log("password must be more than 7 Character", " alert-infos");
  
}
else{
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' }

    };
    const response = await axios.post('/user/newpassword', user,config)
    console.log(response.data.msg);
    window.location = '/login'
    
  } catch (error) {
    console.log(error.response.data.msg);
    
  }
}

  
  // try {
  //   const result = await axios.post('http://localhost:7000/user/resetPassword', data, config);
  //   console.log(result);
  // } catch (error) {
  //   console.log(error);
  // }
}
// const submitResetpw = async (e) => {
//   e.preventDefault();
//   sendResetPw({ password })

// }


return (
  <div>
    <NavBar />
  <div className="resetpassword">
    
    <h1>Reset Password</h1>
    <i class="fas fa-unlock one"></i>
    <i class="fas fa-unlock two"></i>
    <i class="fas fa-unlock three"></i>
    { validToken ?

    <form onSubmit={sendResetPw} className="form">
      
        
        <input className="inputfield" type="password" onChange={changePw} name="password" placeholder=" Enter your new Password" />
 

      
        
        <input  className="inputfield" type="password" onChange={changePw} name="password2" placeholder=" Confirm your new Password" />
      
      <input className="button" type="submit" value="Reset"  />

    </form> :
    <h1><span>Your token is not valid </span> </h1> }
  </div>
  
  </div>
);

}

export default GeneratePassword
