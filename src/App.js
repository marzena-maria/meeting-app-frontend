import './App.scss';
import React from "react";
import {BrowserRouter,Route,Switch}from "react-router-dom";
import Register from "./Components/Forms/UserForms/Register";
import EventForm from "./Components/Forms/EventForm/EventForm";
import Login from "./Components/Forms/UserForms/Login";
import UserProfile from "./Components/Pages/UserProfile";
import Home from "./Components/Pages/Home";
import Maps from './Components/Pages/Maps/Maps';
import Notifications from "./Components/Notifications";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import GuestRoute from "./Components/GuestRoute/GuestRoute";
import About from "./Components/About";
import Contact from "./Components/Contact";


function App() {
  return (
    <Notifications >
    <BrowserRouter>
    {/*<h1> home page</h1> */}
    {/* <ul>
      <li>
        <Link to="/home">Home</Link>
      </li> */}
      {/* <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li> */}
      {/* <li>
        <Link to="/user_profile">User Profile</Link>
      </li>
    </ul> */}

    {/* <NavBar /> */}
    <Switch>
      <Route path ="/event-form" component={EventForm} exact /> 
      <Route path ="/location" component={Maps} exact /> 
      <GuestRoute path ="/register" component={Register} exact />    
      <GuestRoute path ="/login" component={Login} exact />
      <PrivateRoute path ="/user_profile" component={UserProfile} exact />
      <Route path ="/" component={Home} exact />
      <Route path ="/about" component={About} exact />
      <Route path ="/contact" component={Contact} exact />

    </Switch>

    </BrowserRouter>
    
    </Notifications>
  );
}

export default App;
