import React,{useState} from 'react'
import Axios from "axios";
import { useHistory } from "react-router-dom";


// const isRequired =(val)=>{
//    return val.length > 0 ? "" :" cannot be blank"
// }


function Register() {


    // function validate(validation){
    //     setErrors(validations.map(errorFor => errorFor(value)))
    // }

    const history = useHistory();

    const [username,setUsername]= useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [gender,setGender] = useState("N/A");
    const [age,setAge] = useState(0);
    const [city,setCity] = useState("");
    const [country,setCountry] = useState("");
    const [bio,setBio] = useState("");
    // const [error,setError] = useState("")

    const register = async() =>{
       const response = await Axios.post(" /user/register",{
            username,
            email,
            password,
            gender,
            age,
            city,
            country,
            bio

        })
        if(response){
            console.log(response);
           
          history.push("/login");
            
        }
        }

    return (
        <div>
            <h1>Register</h1>
            <div>
                <label>Username* :</label>
                <input type="text" value={username}  onChange={(e)=>setUsername(e.target.value)} />
                
            </div>
            <br />
            <div>
                <label>Email* :</label>
                <input type="email" value={email}  onChange={(e)=>setEmail(e.target.value)}/>
                
            </div>
            <br />
            <div>
                <label>Password*  :</label>
                <input type="text" value={password}  onChange={(e)=>setPassword(e.target.value)} />
              
            </div>
            <br />
            <div>
                <label>Gender:</label>
                <select type="text" value={gender}  onChange={(e)=>setGender(e.target.value)} >
                   
                    <option value="male" key="">Male</option>
                    <option value="female" key="">Female</option>
                    <option value="others" key="">Others</option>
                    <option value="N/A" key="">N/A</option>

                </select>
              
            </div>
            <br />
            <div>
                <label>Age:</label>
                <input type="number" value={age}  onChange={(e)=>setAge(e.target.value)} />
              
            </div>
            <br/>
            <div>
                <label>City:</label>
                <input type="text" value={city}  onChange={(e)=>setCity(e.target.value)} />
              
            </div>
            <br />
            <div>
                <label>Country:</label>
                <input type="text" value={country}  onChange={(e)=>setCountry(e.target.value)} />
              
            </div>
            <br />
            <div>
                <label>Bio:</label>
                <textarea cols="30" rows="10" type="text" value={bio}  onChange={(e)=>setBio(e.target.value)} />
              
            </div>
            <br />
            <button onClick={register}>Register</button>
        </div>
    )
}

export default Register
