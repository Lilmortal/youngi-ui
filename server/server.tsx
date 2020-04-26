import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import express from "express";

import App from "../src/Root";

// const React = require("react");
// const { renderToString } = require("react-dom/server");
// const express = require("express");

// const App = require("../src/Root.tsx");

const app = express();

// app.set("views", "../views");
app.engine("ejs", require("ejs").__express);
app.set("view engine", "ejs");
app.get("*", (req, res) => {
  const html = renderToStaticMarkup(<App />);
  res.render("index", {
    html,
    title: "Youngi App",
    description: "It works yaaay",
  });
});

app.listen(3000);
