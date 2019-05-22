import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import thunk from "redux-thunk";
import logger from "redux-logger";
import {BrowserRouter as Router,withRouter} from 'react-router-dom';

import "./index.css";
import App from "./App";

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

// ReactDOM.render(
//   <Provider store={store}>
//     <Router>
//       <AppWithRouter />
//     </Router>
//   </Provider>,
//   document.getElementById("root")
// );


const rootElement = document.getElementById('root');
const AppWithRouter = withRouter(App);
ReactDOM.render(
  <Router>
    <Provider store={store}>
    <AppWithRouter />
    </Provider>
  </Router>,
  rootElement
);
