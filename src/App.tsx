import Todos from "./components/Todos/Todos";
import NewTodo from "./components/NewTodo/NewTodo";

import TodosProvider from "./context/TodosProvider";

function App() {
    return (
        <TodosProvider>
            <NewTodo />
            <Todos />
        </TodosProvider>
    );
}

export default App;
