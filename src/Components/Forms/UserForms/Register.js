import React,{useState} from 'react'
import Axios from "axios";

function Register() {

    const [username,setUsername]= useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [gender,setGender] = useState("N/A");
    const [age,setAge] = useState(0);
    const [bio,setBio] = useState("");

    const register = async() =>{
       const response = await Axios.post(" /user/register",{
            username,
            email,
            password,
            gender,
            age,
            bio

        })
        if(response){
            console.log(response);
           
          
            
        }
        }

    return (
        <div>
            <h1>Register</h1>
            <div>
                <label>Username :</label>
                <input type="text" value={username}  onChange={(e)=>setUsername(e.target.value)} />
                
            </div>

            <div>
                <label>Email :</label>
                <input type="email" value={email}  onChange={(e)=>setEmail(e.target.value)}/>
                
            </div>

            <div>
                <label>Password:</label>
                <input type="text" value={password}  onChange={(e)=>setPassword(e.target.value)} />
              
            </div>
            <div>
                <label>Gender:</label>
                <select type="text" value={gender}  onChange={(e)=>setGender(e.target.value)} >
                    <option value="male" key="">Male</option>
                    <option value="female" key="">Female</option>
                    <option value="others" key="">Others</option>

                </select>
              
            </div>
            <br />
            <div>
                <label>Age:</label>
                <input type="number" value={age}  onChange={(e)=>setAge(e.target.value)} />
              
            </div>
            <br/>
            <div>
                <label>Bio:</label>
                <textarea cols="30" rows="10" type="text" value={bio}  onChange={(e)=>setBio(e.target.value)} />
              
            </div>
            <button onClick={register}>Register</button>
        </div>
    )
}

export default Register
