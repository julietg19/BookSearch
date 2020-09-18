import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";
import Search from "./components/Search";
import Saved from "./components/Saved";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Jumbotron />
      <BrowserRouter>
        <Route exact path="/" component={Search} />
        <Route exact path="/saved" component={Saved} />
      </BrowserRouter>
    </div>
  );
}

export default App;
