import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddTodoAction, RemoveTodoAction } from "./actions/TodoActions";
import "./App.css";
import SingleTodo from "./Components/SingleTodo";

const App = () => {
  const [todo, setTodo] = useState();

  const dispatch = useDispatch();

  const Todo = useSelector((state) => state);
  const {
    TodoReducers: { todos },
  } = Todo;
  console.log(Todo);
  console.log(todos);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(AddTodoAction(todo));
  };

  const removeHandler = (t) => {
    dispatch(RemoveTodoAction(t));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>Redux-based Todo app</h2>
        <form onSubmit={handleSubmit}>
          <input
            className="todo-in"
            placeholder="Enter a todo"
            onChange={({ target }) => setTodo((prev) => (prev = target.value))}
          />
          <button className="todo-btn" type="submit">
            Go
          </button>
        </form>
        <ul className="all-todo">
          {todos
            ? todos.map((t) => {
                console.log(t);
                return (
                  <SingleTodo
                    id={t.id}
                    todo={t}
                    removeHandler={removeHandler}
                  />
                );
              })
            : console.log("empty")}
          {todos
            ? todos.map((t) => {
                console.log(t);
                return (
                  <li key={t.id} className="single-todo">
                    <span className="todo-text">{t.todo}</span>
                    <button
                      className="btn-del"
                      onClick={() => removeHandler(t)}
                    >
                      delete
                    </button>
                  </li>
                );
              })
            : console.log("empty")}
        </ul>
      </header>
    </div>
  );
};

export default App;
