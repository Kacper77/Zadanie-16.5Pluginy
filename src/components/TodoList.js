import React from "react";
import "./TodoList.css";
import Todo from "./Todo";

const TodoList = props => (
    <ul>{props.todos.map(todo => <Todo remove={props.remove} todo={todo} />)}</ul>
);

export default TodoList;