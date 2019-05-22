import React from "react";
import "./App.css";

import { Route, Link } from "react-router-dom";

import Login from "./components/Login";
import Register from "./components/Register";
import JokeWallet from "./components/JokeWallet";
import JokeStream from "./components/JokeStream"
import PrivateRoute from "./PrivateRoute";
import AddJokeForm from "./components/AddJokeForm"

function App() {
  return (
    <div className="App">
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      <Link to="/my-wallet">My Jokes</Link>
      <Link to="/jokestream">Jokes</Link>
      <Link to="/add-joke">Add Joke</Link>
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/jokestream" component={JokeStream} />
      <PrivateRoute path="/my-wallet" component={JokeWallet} />
      <PrivateRoute path="/add-joke" component={AddJokeForm} />
      
    </div>
  );
}

export default App;
