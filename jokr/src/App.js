import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link, NavLink, withRouter } from 'react-router-dom';

// import { Route, Link } from "react-router-dom";

import Login from "./components/Login";
import Register from "./components/Register";
import JokeWallet from "./components/JokeWallet";
import JokeStream from "./components/JokeStream"
import PrivateRoute from "./PrivateRoute";
import AddJokeForm from "./components/AddJokeForm"

function App() {
  return (
    <div className="App">
      <nav className="nav-bar">
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/my-wallet">My Jokes</NavLink>
      <NavLink to="/jokestream">Jokes</NavLink>
      <NavLink to="/add-joke">Add Joke</NavLink>
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
