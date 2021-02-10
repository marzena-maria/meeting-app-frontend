import axios from 'axios'
import React,{useState} from 'react'

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
        <form onSubmit={sendEmail}>
            <label>enter the registered emailId</label>
            <input type="email" value = {email} onChange={(e)=>{setEmail(e.target.value)}} />
            <button type="submit">Submit</button>
        </form>
    )
}

export default Password
