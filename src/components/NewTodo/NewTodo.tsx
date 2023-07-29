import { useRef, useContext } from "react";

import classes from "./NewTodo.module.css";

import TodosContext from "../../context/TodosContext";

function NewTodo() {
    const todosCtx = useContext(TodosContext);

    const todoTextInputRef = useRef<HTMLInputElement>(null);

    function submitHandler(event: React.FormEvent) {
        event.preventDefault();

        const enteredText = todoTextInputRef.current!.value;

        if (enteredText.trim().length === 0) {
            return;
        }

        todosCtx.addTodo(enteredText);

        todoTextInputRef.current!.value = "";
    }

    return (
        <form onSubmit={submitHandler} className={classes.form}>
            <label htmlFor="text">To-Do List</label>
            <input ref={todoTextInputRef} type="text" id="text" />
            <button>Add Todo</button>
        </form>
    );
}

export default NewTodo;
