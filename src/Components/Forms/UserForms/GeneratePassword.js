import React,{useState} from 'react'
import { useHistory,useParams } from 'react-router-dom'
import axios from "axios";

function GeneratePassword() {
  const history = useHistory()
  const [password,setPassword] = useState("");
  const {token}= useParams()
  const getPassword =async(e) =>{
    e.preventDefault();
        const config = {
            headers: {
              "Content-Type": "application/json",
            },
            body:JSON.stringify({
              password,
              token
            })
          };
        try {
            
            const response = await axios.post('/new-password',{password} ,config);
            console.log(response.data.msg);
            history.push("/login")

            
        } catch (error) {
            console.log(error);
        }

    }    
  

    return (
        <div>
        <label>Password* :</label>
        <input
          type="text"
          required={true}
          value={password}
          onChange={(e) =>setPassword(e.target.value)}
        />
        <label>Repeat Password* :</label>
        <input
          type="text"
          required={true}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={getPassword}>Set Password</button>
        </div>
    )
}

export default GeneratePassword
