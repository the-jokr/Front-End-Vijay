import React from "react";
import "./App.css";

import { Route, Link } from "react-router-dom";

import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <div className="App">
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      <Route exact path="/login" component={Login} />
      <Route path="/register" component={Register} />
    </div>
  );
}

export default App;
