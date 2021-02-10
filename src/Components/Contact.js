import React, { useState, useContext } from "react";
import { NotificationContext } from "../Components/Notifications";
import "./Contact.scss";

function Contact() {
  const setMessage = useContext(NotificationContext);
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const localData = localStorage.getItem("contactSubmit");

  function contactSubmit(e) {
    e.preventDefault();
    JSON.stringify(localStorage.setItem("contactSubmit", email, msg));
    if (email && msg) {
      return setMessage(
        "We will get back to you as soon as possible. Thank you for your interest."
      );
    }
    return setMessage("Please fill up the form before Submitting");
  }

  return (
    <header>
    <div className="contact">
    <h1>Contact Us</h1>
      <div className="info-form">
      
        <div className="phone-email">
          <h3>
            You can reach us at our email:{" "}
            <strong>mardavishdci@gmail.com</strong>{" "}
          </h3>
          <div>
            <h3>You can also contact us on our tollfree number,open 24*7</h3>
            <h4>0800-4444-333</h4>
          </div>
        </div>
        <form className="form" onSubmit={contactSubmit}>
          <h4>For Queries:</h4>
          <div className="msg">
            <label className="label">
              <i className="far fa-envelope"></i>
            </label>
            <input
             className="email"
              type="email"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="msg">
            <label  className="label">
              <i className="far fa-comment-alt"></i>
            </label>
            <textarea
              className="textarea"
              cols="22"
              rows="10"
              type="text"
              value={msg}
              placeholder="Message here..."
              onChange={(e) => setMsg(e.target.value)}
            />
          </div>
  
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
   
    </header>
  );
}

export default Contact;
