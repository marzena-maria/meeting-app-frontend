import React, { useState, useContext } from "react";
import { NotificationContext } from "../Components/Notifications";
import "./Contact.scss";
import ContactImg from "./Slider/meetUpImages/contactback.jpg"
import NavBar from "./shared/NavBar";
import Footer from "./shared/Footer";

function Contact() {
  const setMessage = useContext(NotificationContext);
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const localData = localStorage.getItem("contactSubmit");

  function contactSubmit(e) {
    e.preventDefault();
    JSON.stringify(localStorage.setItem(localData, email, msg));
    if (email && msg) {
      return setMessage(
        "We will get back to you as soon as possible. Thank you for your interest."
      );
    }
    return setMessage("Please fill up the form before Submitting");
  }

  return (
    <div>
      <NavBar />
    <div className="contactpage">
      
      <img className="bg" src={ContactImg} alt="" />
    <div className="contact">
    <h1 className='contactHeading'>Contact Us</h1>
      <div className="info-form">
      
        <div className="phone-email">
          <p className='phone-email-heading'>
            You can reach us at
          </p> 
          <div className="mail">
            <i className="fas fa-envelope"></i>
            <p className='phoneNumber'>mardavishdci@gmail.com</p>
          </div>
          <div className="phone">
            <i className="fas fa-phone-alt"></i>
            <p className='emailAddress'>0800-4444-333</p>
          </div>
        </div>

        <form className="contactform" onSubmit={contactSubmit}>
          <p className='contact-form-heading'>For Queries:</p>
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
  
          <button className="button" type="submit">Submit</button>
        </form>
      </div>
    </div>
   
    </div>
    <Footer />
    </div>
  );
}

export default Contact;
