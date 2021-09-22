import React from "react";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Redux-based Todo app</h2>
        <form>
          <input className="todo-in" placeholder="Enter a todo" />
          <button className="todo-btn" type="submit">
            Go
          </button>
        </form>
        <ul className="all-todo">
          <li className="single-todo">
            <span className="todo-text">First todo</span>
            <button className="btn-del">delete</button>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default App;
