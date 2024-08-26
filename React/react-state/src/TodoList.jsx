import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./TodoList.css";

export default function TodoList() {
  let [todos, setTodos] = useState([
    { task: "sample-task", id: uuidv4(), isDone: false },
  ]);
  let [newTodo, setNewTodo] = useState("");

  let addNewTask = () => {
    setTodos((prevTodo) => {
      return [...prevTodo, { task: newTodo, id: uuidv4(), isDone: false }];
    });
    setNewTodo("");
  };

  let updateTodoValue = (event) => {
    setNewTodo(event.target.value);
  };

  let deleteTodo = (id) => {
    setTodos((prevTodo) => prevTodo.filter((prevTodo) => prevTodo.id != id));
  };

  let markAllAsDone = () => {
    setTodos((prevTodo) =>
      prevTodo.map((todo) => {
        return {
          ...todo,
          isDone: true,
        };
      })
    );
  };

  let markAsDone = (id) => {
    setTodos((prevTodo) =>
      prevTodo.map((todo) => {
        if (todo.id == id) {
          return { ...todo, isDone: true };
        } else {
          return todo;
        }
      })
    );
  };

  return (
    <div className="todo-app">
      <h2>Task Todo</h2>
      <div className="row">
        <input
          type="text"
          placeholder="add a task"
          value={newTodo}
          onChange={updateTodoValue}
        />
        <button className="addBtn" onClick={addNewTask}>
          Add Task
        </button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              style={todo.isDone ? { textDecorationLine: "line-through" } : {}}
            >
              {todo.task}
            </span>
            <button className="deleteBtn" onClick={() => deleteTodo(todo.id)}>
              delete
            </button>
            <button className="markDoneBtn" onClick={() => markAsDone(todo.id)}>
              Mark as Done
            </button>
          </li>
        ))}
      </ul>
      <button className="markAllDoneBtn" onClick={markAllAsDone}>
        Mark all as Done
      </button>
    </div>
  );
}
