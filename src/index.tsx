import React from "react";
import ReactDOM from "react-dom";

// TODO: Migrate this to a seperate script tag to be cached independently.
// import "../vendor/polyfill/src/polyfill";

import App from "./App";

const a = (): void => console.log("babel works");

a();

fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((json) => console.log(json));

ReactDOM.render(<App />, document.querySelector("#root"));
