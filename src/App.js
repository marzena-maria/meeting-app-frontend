//import './App.scss';
import React from "react"
import {BrowserRouter,Route,Switch,Link} from "react-router-dom"
import Register from "./Components/Forms/Register";
import Login from "./Components/Forms/Login";
import EventForm from './Components/Forms/EventForm/EventForm';

function App() {
  return (
    <BrowserRouter>

    <ul>
      {/* <li>
        <Link to="/">Homepage</Link>
      </li> */}
      <li>
        <Link to='/add-new-event'>Add New Event</Link>
      </li>
    </ul>

    <Switch>

      <Route path ="/register" component={Register} exact />
      <Route path ="/login" component={Login} exact />
      <Route path="/add-new-event" component={EventForm}/>
      {/* <Route path="/" component={Homepage}/> */}

    </Switch>

    </BrowserRouter>
  );
}

export default App;
