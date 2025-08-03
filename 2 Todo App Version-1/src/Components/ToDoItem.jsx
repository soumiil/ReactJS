import styles from "./ToDoItem.module.css";

function ToDoItem({ todos, onDeleteTodo }) {
    return (
        <>
            <div className={`container ${styles.mycontainer}`}>
                {todos.length === 0 ? (
                    <p>You are all set for the day!</p>
                ) : (
                    todos.map((todo) => (
                        <div key={todo.id}>
                            <div className={`row ${styles.todoItemRow}`}>
                                <div className={`col-6 ${styles["row-style"]}`}>
                                    <h4>{todo.task}</h4>
                                </div>
                                <div className={`col-4 ${styles["row-style"]}`}>
                                    <h6>{todo.date}</h6>
                                </div>
                                <div className={`col-2 ${styles["row-style"]}`}>
                                    <button
                                        type="button"
                                        className={`btn btn-danger ${styles["deleteButton"]}`}
                                        onClick={() => onDeleteTodo(todo.id)}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                            <hr />
                        </div>
                    ))
                )}
            </div>
        </>
    );
}

export default ToDoItem;
