import React from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";

import Sidebar from "./components/sidebar/sidebar.component";

function App() {
  return (
    <div>
      <Sidebar />

      <Switch>
        <Route exact path="/"></Route>
      </Switch>
    </div>
  );
}

export default App;
