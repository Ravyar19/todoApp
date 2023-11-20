import React, { useState } from "react";
import TodoForm from "./TodoForm";
import { Card, CardContent } from "@mui/material";
import { v4 as uuidv4 } from "uuid";

const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

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
  return (
    <div className="mt-10 flex justify-center items-center">
      <Card variant="outlined" className="max-w-[800px] p-10">
        <CardContent>
          <TodoForm addTodo={addTodo} />
        </CardContent>
      </Card>
    </div>
  );
};

export default TodoWrapper;
