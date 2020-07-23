import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import Sidebar from "./components/sidebar/sidebar.component";
import HomePage from "./pages/home/home.page";
import Countries from "./pages/countries/countries.component";
import NewsPage from "./pages/news/news.page";

function App() {
  return (
    <div className="main">
      <Sidebar />

      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/home" component={HomePage}></Route>
        <Route exact path="/country" component={Countries}></Route>
        <Route exact path="/news" component={NewsPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
