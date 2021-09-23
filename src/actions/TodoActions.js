export const AddTodoAction = (todo) => (dispatch, getState) => {
  const {
    TodoReducers: { todos },
  } = getState();

  const exisitingTodo = todos.find((i) => i.todo === todo);

  if (!exisitingTodo && todo !== "") {
    dispatch({
      type: "ADD_TODO",
      payload: [{ id: todo, todo }, ...todos],
    });
  }
};

export const RemoveTodoAction = (todo) => (dispatch, getState) => {
  const {
    TodoReducers: { todos },
  } = getState();

  dispatch({
    type: "REMOVE_TODO",
    payload: todos.filter((t) => t.id !== todo.id),
  });
};
