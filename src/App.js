//import './App.scss';
import React from "react"
import {BrowserRouter,Route,Switch, Redirect,Link} from "react-router-dom"
import Register from "./Components/Forms/Register";
import Login from "./Components/Forms/Login";
import UserProfile from "./Components/Pages/UserProfile";
import Home from "./Components/Pages/Home";


function App() {
  return (
    <BrowserRouter>
    {/*<h1> home page</h1> */}
    <ul>
      <li>
        <Link to="/home">Home</Link>
      </li>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
      <li>
        <Link to="/user_profile">User Profile</Link>
      </li>
    </ul>
    <Switch>
      <Route exact path="/"><Redirect to="/home" /></Route>
      <Route path ="/register" component={Register} exact />
      <Route path ="/login" component={Login} exact />
      <Route path ="/user_profile" component={UserProfile} exact />
      <Route path ="/home" component={Home} exact />

    </Switch>

    </BrowserRouter>
  );
}

export default App;
