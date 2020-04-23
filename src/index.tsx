import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const a = (): void => console.log("babel works");

a();

ReactDOM.render(<App />, document.querySelector("#root"));
