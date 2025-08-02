import styles from "./ToDoItem.module.css";

function ToDoItem({ content, date, todoId, deleteTodo }) {
    return (
        <>
            <div className={`container ${styles["todoContainer"]}`}>
                <div class="row">
                    <div className={`col-6 ${styles["row-style"]}`}>
                        <h4>{content}</h4>
                    </div>
                    <div className={`col-4 ${styles["row-style"]}`}>
                        <h6>{date}</h6>
                    </div>
                    <div className={`col-2 ${styles["row-style"]}`}>
                        <button
                            type="button"
                            className={`btn btn-danger ${styles["deleteButton"]}`}
                            onClick={() => deleteTodo(todoId)}
                        >
                            Delete
                        </button>
                    </div>
                </div>
                <hr />
            </div>
        </>
    );
}

export default ToDoItem;
