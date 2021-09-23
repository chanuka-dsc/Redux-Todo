import React from "react";

const SingleTodo = (props) => {
  const { id, todo, removeHandler } = props;
  return (
    <li key={`N${id}`} className="single-todo">
      <span className="todo-text">{todo.todo}</span>
      <button className="btn-del" onClick={() => removeHandler(todo)}>
        delete
      </button>
    </li>
  );
};

export default SingleTodo;
