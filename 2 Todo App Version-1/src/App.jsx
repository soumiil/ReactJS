import AppName from "./Components/AppName";
import AddToDo from "./Components/AddToDo";
import ToDoItem from "./Components/ToDoItem";
import styles from "./App.module.css";
import { useState } from "react";

function App() {
    const [list, setList] = useState([]);

    const handleAddToDo = (todo, todoDate, todoId) => {
        const newTodo = {
            id: todoId,
            task: todo,
            date: todoDate,
        };

        setList((prevList) => [...prevList, newTodo]);
    };

    const handleDeleteTodo = (todoId) => {
        setList(
            list.filter((todo) => {
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
