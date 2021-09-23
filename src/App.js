import React from "react";
import TodoEnter from "./Pages/TodoEnter";
import { Link, Route, Switch } from "react-router-dom";
import TodoSummary from "./Pages/TodoSummary";
import "./App.css";

const App = () => {
  return (
    <div className="nav">
      <Link to="/todo">Enter Todo</Link>
      <Link to="/summary">Todo Summary</Link>
      <Switch>
        <Route path="/todo" component={TodoEnter} />
        <Route path="/summary" component={TodoSummary} />
      </Switch>
    </div>
  );
};

export default App;
