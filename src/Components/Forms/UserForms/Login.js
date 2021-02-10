import React,{useState,useContext} from 'react'
import Axios from "axios";
import { NotificationContext } from "../../Notifications";
import { useHistory,Link} from "react-router-dom";
import "./Login.scss"
import Navbar from '../../shared/NavBar';


 function Login() {
    const setMessage = useContext(NotificationContext);
    const history = useHistory();

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const login = async() =>{
    
        const response = await Axios.post("/user/login",{
           withCredentials:true,
             email,
             password
         })
         
         if(response){
             console.log(response);
             window.localStorage.setItem("loggedIn",JSON.stringify(true))
             history.push("/user_profile")
         }
       else{
           setMessage("EmailId or password is invalid")
       }
    }
       
     
    return (
        <div>
            <Navbar />
        <div className="login">
            <h1>Login</h1>
            {/* <div>
                <label>username :</label>
                <input type="text" value="username" placeholder="username" onChange={(e)=>setUsername(e.target.value)} />
                
            </div> */}
            <div className="form">

            <div>
                <label>Email :</label>
                <input type="email" value={email}   onChange={(e)=>setEmail(e.target.value)}/>
                
            </div>

            <div>
                <label>Password:</label>
                <input type="password" value={password}  onChange={(e)=>setPassword(e.target.value)} />
              
            </div>
            <button onClick={login}>Login</button>
            <a href=""> <Link to= "/resetPassword">Forget Password</Link> </a>
            </div>
        </div>
        </div>
    )

}

export default Login