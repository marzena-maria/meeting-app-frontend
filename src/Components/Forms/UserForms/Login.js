import React,{useState,useContext} from 'react'
import Axios from "axios";
import { NotificationContext } from "../../Notifications";
import { useHistory,Link} from "react-router-dom";
import "./Login.scss"
import Navbar from '../../shared/NavBar';


 function Login() {
    const setNotification = useContext(NotificationContext);
    const history = useHistory();

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [isPasswordShown,setIsPasswordShown] = useState(false);

    const toggleVisibility=()=>{
        setIsPasswordShown(!isPasswordShown)
      }

    const login = async() =>{
    try{
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
        }catch{
    
           console.log(123);
        if( !email || !password){
        setNotification("EmailId or password is invalid")
       }
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
                <input className="inputfield" type="email" value={email}   onChange={(e)=>setEmail(e.target.value)}/>
                
            </div>

            <div >
                <label className="pass">Password:</label>
        
                <input className="inputfield" type={isPasswordShown ? "text" : "password"} value={password}  onChange={(e)=>setPassword(e.target.value)} />
                <i className={`far ${isPasswordShown ? "fa-eye" : "fa-eye-slash"}`} onClick={toggleVisibility} ></i>
            </div>
            <button onClick={login}>Login</button>
            <a href=""> <Link to= "/forgetPassword">Forget Password</Link> </a>
            </div>
        </div>
        </div>
    )

}

export default Login