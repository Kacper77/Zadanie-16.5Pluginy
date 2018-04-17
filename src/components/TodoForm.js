import React from 'react';
import style from './TodoForm.css';

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newForm: ''
        }

        this.onClickHandler = this.onClickHandler.bind(this);
    }
    onClickHandler(form) {
        this.props.join(this.state.newForm);
        this.setState({ newForm })
    }
    render() {
        return (
            <div className={styleTodoForm}>
                <button onClick={() => this.onClickHandler}>Dodaj</button>
            </div>
        );
    }
}


export default TodoForm;