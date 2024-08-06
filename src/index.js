import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import reportWebVitals from "./reportWebVitals";
import ToDoList from "./screens/ToDoList";

ReactDOM.render(
 <>
  <ToDoList />
 </>,
 document.getElementById("root")
);

reportWebVitals();
