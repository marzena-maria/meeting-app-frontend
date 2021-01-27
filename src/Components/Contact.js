import React,{useState,useContext} from "react";
import { NotificationContext } from "../Components/Notifications";

function Contact() {
    const setMessage = useContext(NotificationContext);
    const[email,setEmail] = useState("");
    const [msg,setMsg] = useState("");

    function contactSubmit(e){
        e.preventDefault();
        if(email && msg){
        return setMessage("We will get back to you as soon as possible. Thank you for your interest.")
    }
    return setMessage("Please fill up the form before Submitting")
    
}


  return (
    <div>
        <br/>
        <br/>
        <h3>You can reach us at our email: <strong>mardavishdci@gmail.com</strong> </h3>
        <div>
        <h3>You can also contact us on our tollfree number,open 24*7</h3>
        <h4>0800-4444-333</h4>
        </div>
      <form onSubmit={contactSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label>Message:</label>
          <textarea
            cols="30"
            rows="10"
            type="text"
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
