import axios from 'axios'
import React,{useState,useContext} from 'react'
import Navbar from '../../shared/NavBar'
import "./Password.scss"
import { NotificationContext } from "../../Notifications";


function Password() {
    const setNotification = useContext(NotificationContext);

    const [email,setEmail] = useState("")

    const sendEmail = async(e)=>{
        e.preventDefault();
        const config = {
            headers: {
              "Content-Type": "application/json",
            },
          };
        try {
            
            const response = await axios.post('/user/forgetPassword',{email} ,config);
            console.log(response.data.msg);
            setNotification("Password reset link has been sent to your registered Email.Check your spam folder as well")
        } catch (error) {
            console.log(error);
            setNotification("Email Id not registered")
        }

    }    
    return (
        <div>
        <Navbar />
        <div className="forgetPassword">
            <h2>Forget Password</h2>
        <form  className="form" onSubmit={sendEmail}>
            <label>Enter the registered emailId</label>
            <input type="email" value = {email} onChange={(e)=>{setEmail(e.target.value)}} />
            <button type="submit">Submit</button>
        </form>
        </div>
        
        </div>
    )
}

export default Password
