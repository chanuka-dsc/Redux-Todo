import React from "react";

const SingleTodo = ({ id, todo, removeHandler }) => {
  console.log(id, todo, removeHandler);
  return (
    <li key={`N${id}`} className="single-todo">
      <span className="todo-text">{todo}</span>
      <button className="btn-del" onClick={() => removeHandler(todo)}>
        delete
      </button>
    </li>
  );
};

export default SingleTodo;
