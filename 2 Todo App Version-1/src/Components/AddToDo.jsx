import styles from "./AddToDo.module.css";

function AddToDo({ setList, todo, setTodo, todoDate, setTodoDate }) {
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
                            onChange={(e) => {
                                setTodo(e.target.value);
                            }}
                        />
                    </div>
                    <div className="col-4">
                        <input
                            type="date"
                            value={todoDate}
                            onChange={(e) => {
                                setTodoDate(e.target.value);
                            }}
                        />
                    </div>
                    <div className="col-2">
                        <button
                            type="button"
                            className="btn btn-success"
                            onClick={() => {
                                if (todo.trim() !== "" && todoDate !== "") {
                                    const newItem = {
                                        id: crypto.randomUUID(),
                                        task: todo.trim(),
                                        date: todoDate,
                                    };
                                    console.log(JSON.stringify(newItem));

                                    setList((prevList) => [
                                        ...prevList,
                                        newItem,
                                    ]);
                                    setTodo("");
                                    setTodoDate("");
                                }
                            }}
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
