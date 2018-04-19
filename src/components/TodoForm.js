import React from "react";
import style from "./TodoForm.css";

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.input = React.createRef();
        this.onClickHandler = this.onClickHandler.bind(this);
    }
    onClickHandler() {
        this.props.addTodo(this.input.current.value);
        this.input.current.value = "";
    }
    render() {
        return (
            <div className={style.TodoForm}>
        <input type="text" ref={this.input} defaultValue="go" />
        <button onClick={this.onClickHandler}>Dodaj</button>
      </div>
        );
    }
}

export default TodoForm;