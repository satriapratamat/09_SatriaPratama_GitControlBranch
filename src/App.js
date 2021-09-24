import React from "react";
import Home from "./component/Home.js";
import "./App.css"
import Hamburger from "./component/Hamburger/Hamburger.js";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AboutApp from "./component/AboutApp.js";
import AboutAuthor from "./component/Hamburger/AboutAuthor.js";
import ErrorPage from "./component/ErrorPage.js";



function App() {
  return (
    <>
      <Router>
      <div className="App">
        <Switch>
          <Route path='/' exact component={Home}><Hamburger /><Home/></Route>
          <Route path='/about/about-app' exact component={AboutApp} />
          <Route path='/about/about-author' exact component={AboutAuthor} />
          <Route component={ErrorPage} />
        </Switch>
        </div>
      </Router>
    </>
  );
}

export default App