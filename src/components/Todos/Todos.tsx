import { useContext } from "react";

import classes from "./Todos.module.css";

import TodoItem from "../TodoItem/TodoItem";

import TodosContext from "../../context/TodosContext";

function Todos() {
    const todosContext = useContext(TodosContext);

    return (
        <ul className={classes.todos}>
            {todosContext.items.map((todo) => (
                <TodoItem
                    key={todo.id}
                    text={todo.text}
                    onRemoveTodo={todosContext.removeTodo.bind(null, todo.id)}
                />
            ))}
        </ul>
    );
}

export default Todos;
