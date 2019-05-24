import React from "react";
import "./App.css";
import { Route, NavLink } from 'react-router-dom';

// import { Route, Link } from "react-router-dom";

import Login from "./components/Login";
import Register from "./components/Register";
import JokeWallet from "./components/JokeWallet";
import JokeStream from "./components/JokeStream"
import PrivateRoute from "./PrivateRoute";
import AddJokeForm from "./components/AddJokeForm";
// src/assets/Logo.png

function App() {
  return (
    <div className="App">
      <nav className="nav-bar">
      <img src="Logo.png" alt="Logo" height="175" width="250"/>
      <NavLink to="/login">LOGIN</NavLink>
      {/* <NavLink to="/register">Register</NavLink> */}
      <NavLink to="/my-wallet">MY JOKES</NavLink>
      <NavLink to="/jokestream">JOKE FEED</NavLink>
      {/* <NavLink to="/add-joke">Add Joke</NavLink> */}
      </nav>


      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <PrivateRoute path="/jokestream" component={JokeStream} />
      <PrivateRoute path="/my-wallet" component={JokeWallet} />
      <PrivateRoute path="/add-joke" component={AddJokeForm} />
      
    </div>
  );
}

export default App;

