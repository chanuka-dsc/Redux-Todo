import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RemoveTodoAction } from "../actions/TodoActions";
import SingleTodo from "../Components/SingleTodo";

const TodoSummary = () => {
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

  const removeHandler = (t) => {
    setUpdate(!update);
    dispatch(RemoveTodoAction(t));
  };

  return (
    <div className="summary">
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
      </ul>
    </div>
  );
};

export default TodoSummary;
