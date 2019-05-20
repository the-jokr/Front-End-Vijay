import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Login from './components/login'

function App() {
  return (
       <div className="App">
       <Route path="/login" component={Login} />
       </div>
      );
}

export default App;
