//import './App.scss';
import React from "react"
import {BrowserRouter,Route,Router,Switch} from "react-router-dom"
import Register from "./Components/Forms/Register";
import Login from "./Components/Forms/Login";
import {EventPage} from "./Components/Forms/EventPage/EventPage";


function App() {
  return (
    <BrowserRouter>
    <EventPage />
    <Switch>

      <Route path ="/register" component={Register} exact />
      <Route path ="/login" component={Login} exact />
      <Route path ="/eventPage" component={EventPage} exact />

    </Switch>

    </BrowserRouter>
  );
}

export default App;
