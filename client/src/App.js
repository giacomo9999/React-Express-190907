import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home"
import List from "./pages/List"

import "./App.css";

function App() {
  return (
    <div className="container-outer">
      <h1>{React.version}</h1>
    </div>
  );
}

export default App;
