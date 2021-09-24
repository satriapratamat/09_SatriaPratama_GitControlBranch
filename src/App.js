import React from "react";
import Home from "./component/Home.js";
import "./App.css"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';




function App() {
  return (
    <>
      <Router>
      <div className="App">
        <Switch>
          <Route path='/' exact component={Home}><Home/></Route>
        </Switch>
        </div>
      </Router>
    </>
  );
}

export default App
