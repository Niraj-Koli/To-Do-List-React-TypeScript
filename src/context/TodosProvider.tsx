import { useState } from "react";

import TodosContext from "./TodosContext";

import Todo from "../models/Todo";

type TodosContextObject = {
    items: Todo[];
    addTodo: (text: string) => void;
    removeTodo: (id: string) => void;
};

function TodosContextProvider(props: any) {
    const [todos, setTodos] = useState<Todo[]>([]);

    function addTodoHandler(todoText: string) {
        const newTodo = new Todo(todoText);

        setTodos((prevTodos) => {
            return prevTodos.concat(newTodo);
        });
    }

    function removeTodoHandler(todoId: string) {
        setTodos((prevTodos) => {
            return prevTodos.filter((todo) => todo.id !== todoId);
        });
    }

    const contextValue: TodosContextObject = {
        items: todos,
        addTodo: addTodoHandler,
        removeTodo: removeTodoHandler,
    };

    return (
        <TodosContext.Provider value={contextValue}>
            {props.children}
        </TodosContext.Provider>
    );
}

export default TodosContextProvider;
