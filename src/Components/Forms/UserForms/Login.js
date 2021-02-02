import React,{useState,useContext} from 'react'
import Axios from "axios";
import { NotificationContext } from "../../Notifications";


 function Login() {
    const setMessage = useContext(NotificationContext);

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
            // Refresh so it redirects to home
            window.location.reload(false);
        } else {
            setMessage('EmailId or password is invalid', 'error');
        }
    }
       
     
    return (
        <div>
            <h1>Login</h1>
            {/* <div>
                <label>username :</label>
                <input type="text" value="username" placeholder="username" onChange={(e)=>setUsername(e.target.value)} />
                
            </div> */}

            <div>
                <label>email :</label>
                <input type="email" value={email}   onChange={(e)=>setEmail(e.target.value)}/>
                
            </div>

            <div>
                <label>password:</label>
                <input type="text" value={password}  onChange={(e)=>setPassword(e.target.value)} />
              
            </div>
            <button onClick={login}>Login</button>
            {/* <a href="">Forget Password</a> */}
        </div>
    )

}

export default Login