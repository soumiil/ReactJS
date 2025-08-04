import AppName from "./Components/AppName";
import AddToDo from "./Components/AddToDo";
import ToDoItem from "./Components/ToDoItem";
import styles from "./App.module.css";
import { useState } from "react";

function App() {
    const [list, setList] = useState([]);

    const handleAddToDo = (todo, todoDate, todoId) => {
        setList((prevList) => [
            ...prevList,
            {
                id: todoId,
                task: todo,
                date: todoDate,
            },
        ]);
    };

    const handleDeleteTodo = (todoId) => {
        setList((prevList) =>
            prevList.filter((todo) => {
                return todo.id !== todoId;
            })
        );
    };

    return (
        <>
            <center className={`${styles["todo-container"]}`}>
                <AddToDo onAddToDo={handleAddToDo} />
                <hr />
                <ToDoItem todos={list} onDeleteTodo={handleDeleteTodo} />
            </center>
        </>
    );
}

export default App;
