import styles from "./AddToDo.module.css";
import { useState } from "react";

function AddToDo({ onAddToDo }) {
    const [todo, setTodo] = useState("");
    const [todoDate, setTodoDate] = useState("");

    const handleTodoChange = (event) => {
        setTodo(event.target.value);
    };

    const handleTodoDateChange = (event) => {
        setTodoDate(event.target.value);
    };

    const handleAddButtonClick = () => {
        if(todo.trim().length !== 0 && todoDate.length !== 0) {
            onAddToDo(todo.trim().toUpperCase(), todoDate, crypto.randomUUID());
            setTodo("");
            setTodoDate("");
        }
    };

    const handleEnterKeyPress = (event) => {
        if(todo.trim().length !== 0 && todoDate.length !== 0 && event.key === 'Enter') {
            onAddToDo(todo.trim().toUpperCase(), todoDate, crypto.randomUUID());
            setTodo("");
            setTodoDate("");
        }
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <input
                            className={styles.input}
                            type="text"
                            placeholder="Add your task here"
                            value={todo}
                            onChange={handleTodoChange}
                            onKeyDown={handleEnterKeyPress}

                        />
                    </div>
                    <div className="col-4">
                        <input
                            type="date"
                            value={todoDate}
                            onChange={handleTodoDateChange}
                            onKeyDown={handleEnterKeyPress}

                        />
                    </div>
                    <div className="col-2">
                        <button
                            type="button"
                            className="btn btn-success"
                            onClick={handleAddButtonClick}
                        >
                            Add Item
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AddToDo;
