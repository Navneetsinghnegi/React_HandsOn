import React, { useState } from 'react'

interface ToDo {
  id:number,
  text:string,
  completed : boolean
}

const ToDo = () => {
    const [task, setTask] = useState<string>("");
    const [todos, setTodos] = useState<ToDo[]>([])

   const addTodo = () => {
      if (task.trim() === "") return;

      const newToDo : ToDo = {
        id:Date.now(),
        text : task.trim(),
        completed: false
      }

      setTodos(prev => [...prev, newToDo]);
      setTask("");
    };

    const isComplete = (id:number)=>{
     setTodos(prevTodos => prevTodos.map(todo => todo.id ===id? {...todo, completed: !todo.completed}: todo));
    }

    const deleteTodo = (id: number) => {
    setTodos(prevTodos =>
      prevTodos.filter(todo=>todo.id !==id)
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
        onKeyDown={(e)=> {
          if(e.key === "Enter") addTodo()
        }}
      />
      

      {/* Todo List */}
      {todos.length === 0 ? (
        <p>No tasks available</p>
      ) : (
        <ul>
          {todos.map((todo) => (
            <li key={todo.id} onClick={()=>isComplete(todo.id)} style={{ textDecoration: todo.completed? "line-through" : "none", cursor:"pointer"}}>
              {todo.text}
              <button
                onClick={() => deleteTodo(todo.id)}
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