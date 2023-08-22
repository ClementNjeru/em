// components/Task.js
import React from 'react';

const Task = ({ task }) => {
  const { title, description, dueDate, status } = task;

  return (
    <div className="task">
      <h3>{title}</h3>
      <p>{description}</p>
      <p>Due Date: {dueDate}</p>
      <p>Status: {status}</p>
    </div>
  );
}

export default Task;
