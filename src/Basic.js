import React, { useState, Fragment } from "react";

function Todo({ index, todo, completeTodo, deleteTodo }) {
  return (
    <div
      style={{ textDecoration: todo.completed ? "line-through" : "" }}
      className="todo"
    >
      {todo.text}
      <div>
        <button onClick={() => completeTodo(index)}>Complete</button>
        <button onClick={() => deleteTodo(index)}>Remove</button>
      </div>
    </div>
  );
}

function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="input"
          value={value}
          onChange={e => setValue(e.target.value)}
          placeholder="Add Todo"
        />
      </form>
    </Fragment>
  );
}

function Basic() {
  const [todos, setTodos] = useState([
    {
      text: "Learn about react",
      completed: false
    },
    {
      text: "Learn about yarn",
      completed: false
    },
    {
      text: "Build a cool todo app",
      completed: false
    }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text, completed: false }];
    setTodos(newTodos);
  };

  const handleCompleteTodo = index => {
    const newTodos = [...todos];
    newTodos[index].completed = true;
    setTodos(newTodos);
  };

  const handleDeleteTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div>
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={handleCompleteTodo}
            deleteTodo={handleDeleteTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default Basic;
