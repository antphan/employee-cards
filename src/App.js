import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Employees from "./components/Employees/Employees";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/employees/:id" children={<Employees />} />
      </Switch>
    </Router>
  );
}

export default App;
