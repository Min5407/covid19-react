import React from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";

import Sidebar from "./components/sidebar/sidebar.component";
import HomePage from "./pages/home/home.page";

function App() {
  return (
    <div className="main">
      <Sidebar />

      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/home" component={HomePage}></Route>
      </Switch>
    </div>
  );
}

export default App;
