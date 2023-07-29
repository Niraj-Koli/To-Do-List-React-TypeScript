import classes from "./TodoItem.module.css";

type TodoitemProps = {
    text: string;
    onRemoveTodo: () => void;
};

function TodoItem(props: TodoitemProps) {
    return (
        <li className={classes.item} onClick={props.onRemoveTodo}>
            {props.text}
        </li>
    );
}

export default TodoItem;
