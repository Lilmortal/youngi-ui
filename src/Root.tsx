// import React from "react";
// import ReactDOM from "react-dom";

import "../config/polyfill";
import App from "./App";

const a = (): void => console.log("babel works");

a();

fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((json) => console.log(json));

export default App;
// ReactDOM.render(<App />, document.querySelector("#root"));
