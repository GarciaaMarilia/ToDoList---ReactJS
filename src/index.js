import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import reportWebVitals from "./reportWebVitals";
import ToDoList from "./Screens/ToDoList";

ReactDOM.render(
 <>
  <ToDoList />
 </>,
 document.getElementById("root")
);

reportWebVitals();
