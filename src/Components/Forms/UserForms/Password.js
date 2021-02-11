import axios from 'axios'
import React,{useState} from 'react'
import Navbar from '../../shared/NavBar'
import "./Password.scss"


function Password() {
    const [email,setEmail] = useState("")

    const sendEmail = async(e)=>{
        e.preventDefault();
        const config = {
            headers: {
              "Content-Type": "application/json",
            },
          };
        try {
            
            const response = await axios.post('/user/resetPassword',{email} ,config);
            console.log(response.data.msg);

            
        } catch (error) {
            console.log(error);
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
