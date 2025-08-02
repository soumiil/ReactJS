import AppName from "./Components/AppName";
import AddToDo from "./Components/AddToDo";
import ToDoItem from "./Components/ToDoItem";
import { useState } from "react";

function App() {
    const [list, setList] = useState([]);

    const handleAddToDo = (todo, todoDate, todoId) => {
        const newTodo = {
            id: todoId,
            task: todo,
            date: todoDate,
        };

        setList([...list, newTodo]);
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
            <center className="todo-container">
                <div>
                    <AppName />
                </div>
                <div>
                    <AddToDo onAddToDo={handleAddToDo} />
                    <hr />
                </div>
                <div>
                    <ToDoItem todos={list} onDeleteTodo={handleDeleteTodo} />
                </div>
            </center>
        </>
    );
}

export default App;
