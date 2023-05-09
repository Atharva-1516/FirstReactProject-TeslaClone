import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
    </div>
  );
}

export default App;
