//import './App.scss';
import React from "react"
import {BrowserRouter,Route,Switch, Redirect,Link} from "react-router-dom"
import Register from "./Components/Forms/UserForms/Register";
import Login from "./Components/Forms/UserForms/Login";
import UserProfile from "./Components/Pages/UserProfile";
import Home from "./Components/Pages/Home";
import Notifications from "./Components/Notifications"
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute"

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
     
      <Route path ="/register" component={Register} exact />
      <Route path ="/login" component={Login} exact />
      <PrivateRoute path ="/user_profile" component={UserProfile} exact />
      <Route path ="/" component={Home} exact />

    </Switch>

    </BrowserRouter>
    </Notifications>
  );
}

export default App;
