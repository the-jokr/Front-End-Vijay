import React from "react";
import "./App.css";

import { Route } from "react-router-dom";

import Login from "./components/login";
import Register from "./components/Register";

function App() {
  return (
    <div className="App">
      <Route exact path="/login" component={Login} />
      <Route path="/register" component={Register} />
    </div>
  );
}

export default App;
