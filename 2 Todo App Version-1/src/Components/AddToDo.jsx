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

    function processTodo(str) {
        if(str.length === 0 || typeof str !== 'string') {
            return str;
        }

        setTodo("");
        setTodoDate("");
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }

    const handleAddButtonClick = () => {
        if(todo.trim().length !== 0 && todoDate.length !== 0) {
            onAddToDo(processTodo(todo), todoDate, crypto.randomUUID());
            setTodo("");
            setTodoDate("");
        }
    };

    const handleEnterKeyPress = (event) => {
        if(todo.trim().length !== 0 && todoDate.length !== 0 && event.key === 'Enter') {
            onAddToDo(processTodo(todo), todoDate, crypto.randomUUID());
            setTodo("");
            setTodoDate("");
        }
    }

    return (
        <>
            <div className={`${styles.container}`}>
                <div className="row">
                    <div className="col-6 mb-3">
                        <input
                            className={`${styles.input} form-control`}
                            type="text"
                            placeholder="Add your task here"
                            value={todo}
                            onChange={handleTodoChange}
                            onKeyDown={handleEnterKeyPress}

                        />
                    </div>
                    <div className="col-4 mb-3">
                        <input
                            className={`${styles.input} form-control`}
                            type="date"
                            value={todoDate}
                            onChange={handleTodoDateChange}
                            onKeyDown={handleEnterKeyPress}

                        />
                    </div>
                    <div className="col-2">
                        <button
                            type="button"
                            className={`btn btn-success ${styles.addButton}`}
                            onClick={handleAddButtonClick}
                        >
                            Add
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AddToDo;
