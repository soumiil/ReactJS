import AppName from "./Components/AppName";
import AddToDo from "./Components/AddToDo";
import ToDoItem from "./Components/ToDoItem";
import { useState } from "react";

function App() {
    const [list, setList] = useState([]);
    const [todo, setTodo] = useState("");
    const [todoDate, setTodoDate] = useState("");

    const deleteTodo = (todoId) => {
        setList(
            list.filter((todo) => {
                return todo["id"] !== todoId;
            })
        );
    }

    return (
        <>
            <center className="todo-container">
                <div>
                    <AppName />
                </div>
                <div>
                    <AddToDo setList={setList} todo={todo} setTodo={setTodo} todoDate={todoDate} setTodoDate={setTodoDate}/>
                    <hr />
                </div>
                <div>
                    {list.map((todo) => {
                        return (
                            <ToDoItem
                                key={todo.id}
                                todoId={todo.id}
                                content={todo.task}
                                date={todo.date}
                                deleteTodo={deleteTodo}
                            />
                        );
                    })}
                </div>
            </center>
        </>
    );
}

export default App;
