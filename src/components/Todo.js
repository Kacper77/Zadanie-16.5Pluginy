import React from "react";

const Todo = props => (
    <li>
    {props.todo.text}
    <button onClick={() => props.remove(props.todo.id)}>x</button>
  </li>
);

export default Todo;