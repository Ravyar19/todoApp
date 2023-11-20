import React, { useEffect, useState } from "react";
import TodoForm from "./TodoForm";
import { Card, CardContent } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import Todo from "./Todo";

const TodoWrapper = () => {
  const initialTodos = JSON.parse(localStorage.getItem("todos")) || [];
  const [todos, setTodos] = useState(initialTodos);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo) => {
    const newTodo = {
      id: uuidv4(),
      task: todo,
      isCompleted: false,
      isEditing: false,
    };
    setTodos([...todos, newTodo]);
    console.log(todos);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  const editTodo = (id, newTask) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task: newTask, isEditing: false } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="mt-10 flex justify-center items-center">
      <Card variant="outlined" className="max-w-[800px] p-10">
        <h1 className="text-center mb-10 text-2xl">Get Things Done!</h1>
        <CardContent>
          <TodoForm addTodo={addTodo} />
        </CardContent>
        {todos.map((todo, index) => (
          <Todo
            editTodo={editTodo}
            task={todo}
            key={index}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
          />
        ))}
      </Card>
    </div>
  );
};

export default TodoWrapper;
