//import './App.scss';
import React from "react"
import {BrowserRouter,Route,Switch} from "react-router-dom"
import Register from "./Forms/Register";
import Login from "./Forms/Login";


function App() {
  return (
    <BrowserRouter>

    <Switch>

      <Route path ="/register" component={Register} exact />
      <Route path ="/login" component={Login} exact />

    </Switch>

    </BrowserRouter>
  );
}

export default App;
