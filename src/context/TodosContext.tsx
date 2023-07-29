import React from "react";

import Todo from "../models/Todo";

type TodosContextObject = {
    items: Todo[];
    addTodo: (text: string) => void;
    removeTodo: (id: string) => void;
};

const TodosContext = React.createContext<TodosContextObject>({
    items: [],
    addTodo: (text: string) => {},
    removeTodo: (id: string) => {},
});

export default TodosContext;
