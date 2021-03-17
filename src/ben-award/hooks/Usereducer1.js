import React, { useReducer, useState } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "add-todo":
      return {
        todos: [...state.todos, { text: action.text, completed: false }],
        todoCount: state.todoCount + 1,
      };
    //   avoid state++
    case "toggle-todo":
      return {
        todos: state.todos.map((t, id) =>
          id === action.id ? { ...t, completed: !t.completed } : t
        ),
        todoCount: state.todoCount + 1,
      };
    default:
      return state;
  }
}

function Usereducer() {
  ////////USEREDUCER//////
  // alternaive of the usestate but at the higher level
  //get initialised as the state and action with the dispatch
  //action measn the type of the state
  //dispatch is used to exceute the reducer
  //state is to hold the state
  //payload the dependecies on which the action depend
  //... is important to preserve the state

  const [{ todos, todoCount }, dispatch] = useReducer(reducer, {
    todos: [],
    todoCount: 0,
  });
  const [text, setText] = useState([]);

  return (
    <div>
      <h2>{todoCount}</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({ type: "add-todo", text });
          setText("");
        }}
      >
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </form>
      <pre>{JSON.stringify(todos, null, 2)}</pre>
      {todos.map((t, id) => (
        <div
          key={t.text}
          onClick={() => dispatch({ type: "toggle-todo", id })}
          style={{ textDecoration: t.completed ? "line-through" : "" }}
        >
          {t.text}
        </div>
      ))}
    </div>
  );
}

export default Usereducer;
