// Todo.js
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, CardContent, TextField, Button } from "@mui/material";
import React, { useState } from "react";

const Todo = ({ task, toggleComplete, deleteTodo, editTodo }) => {
  const [editedTask, setEditedTask] = useState(task.task);
  const [isEditing, setIsEditing] = useState(task.isEditing);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    editTodo(task.id, editedTask);
    setIsEditing(false);
  };

  return (
    <Card className="mx-4 mt-10">
      <CardContent className="flex justify-between bg-red-300 items-center">
        {isEditing ? (
          <>
            <TextField
              fullWidth
              value={editedTask}
              onChange={(e) => setEditedTask(e.target.value)}
            />
            <Button onClick={handleSaveClick} variant="outlined">
              Save
            </Button>
          </>
        ) : (
          <>
            <p
              onClick={() => toggleComplete(task.id)}
              className={`${task.isCompleted ? "line-through" : ""}`}
            >
              {task.task}
            </p>
            <div className="space-x-4">
              <FontAwesomeIcon
                icon={faPenToSquare}
                className="cursor-pointer"
                onClick={handleEditClick}
              />
              <FontAwesomeIcon
                icon={faTrash}
                className="cursor-pointer"
                onClick={() => deleteTodo(task.id)}
              />
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default Todo;
