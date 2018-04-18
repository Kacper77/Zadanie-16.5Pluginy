import React from 'react';
import style from './TodoForm.css';

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.input = React.createRef();
        this.onClickHandler = this.onClickHandler.bind(this);
    }
    onClickHandler(form) {
        this.props.addTodo(this.input.current.value)
    }
    render() {
        return (
            <div className={styleTodoForm}>
            	<input type="text" ref={this.input} value="GO" />
				<button onClick={this.onClickHandler}>Dodaj</button>
            </div>
        );
    }
}


export default TodoForm;