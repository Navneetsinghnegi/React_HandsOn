import React, { useState } from 'react'

const ToDo = () => {
    const [task, setTask] = useState<string>("");
    const [todos, setTodos] = useState<string[]>([])

   const addTodo = () => {
    if (task.trim() === "") return;

    setTodos(prevTodos => [...prevTodos, task.trim()]);
    setTask("");
  };

    const deleteTodo = (index: number) => {
    setTodos(prevTodos =>
      prevTodos.filter((_, i) => i !== index)
    );
  };


  return (
    <div>
        <h2>Todo App</h2>

      {/* Input Section */}
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task"
      />
      <button onClick={addTodo}>Add</button>

      {/* Todo List */}
      {todos.length === 0 ? (
        <p>No tasks available</p>
      ) : (
        <ul>
          {todos.map((todo, index) => (
            <li key={index} style={{ margin: "8px 0" }}>
              {todo}
              <button
                onClick={() => deleteTodo(index)}
                style={{ marginLeft: "10px" }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
    
}

export default ToDo;