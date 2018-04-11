import React from "react";
import style from './TodoList.css';
// import Todo from "Todo";

const TodoList = props => (
    <ul>
    	{props.todos.map(todo => (
      		<li>
        		{todo.text}
        		<button onClick={() => props.remove(todo.id)}>x</button>
      		</li>
     	))}
  	</ul>
);



export default TodoList;