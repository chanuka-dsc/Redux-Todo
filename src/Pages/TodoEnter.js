import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddTodoAction, RemoveTodoAction } from "../actions/TodoActions";
import "../App.css";
import SingleTodo from "../Components/SingleTodo";

const TodoEnter = () => {
  const [todo, setTodo] = useState();
  const [nTodo, setNTodo] = useState([]);
  const [update, setUpdate] = useState(true);
  const dispatch = useDispatch();
  const Todo = useSelector((state) => state);

  useEffect(() => {
    const {
      TodoReducers: { todos },
    } = Todo;
    setNTodo(todos);
    console.log("useEffect Todo:", todos);
  }, [update]);

  const handleSubmit = (e) => {
    setUpdate(!update);
    e.preventDefault();
    dispatch(AddTodoAction(todo));
  };

  const removeHandler = (t) => {
    setUpdate(!update);
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
        <ul key="jk1" className="all-todo">
          {nTodo && nTodo.length > 0
            ? nTodo.map((t, key) => {
                console.log(t);
                return (
                  <SingleTodo
                    key={key}
                    id={key}
                    todo={t}
                    removeHandler={removeHandler}
                  />
                );
              })
            : console.log("empty")}

          {/* The direct method
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
            : console.log("empty")} */}
        </ul>
      </header>
    </div>
  );
};

export default TodoEnter;
