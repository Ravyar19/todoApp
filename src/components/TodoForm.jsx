import { Button, TextField } from "@mui/material";
import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(value);
    setValue("");
  };
  return (
    <form className="flex" onSubmit={handleSubmit}>
      <TextField
        fullWidth
        id="outlined-basic"
        label="Add Your Tasks"
        variant="outlined"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button type="submit" variant="outlined">
        Submit
      </Button>
    </form>
  );
};

export default TodoForm;
