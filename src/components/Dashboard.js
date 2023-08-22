// components/Dashboard.js
import React from 'react';
import Task from './Task';

const tasks = [
  {
    title: 'Task 1',
    description: 'Description for Task 1',
    dueDate: '2023-08-31',
    status: 'incomplete',
  },
  {
    title: 'Task 2',
    description: 'Description for Task 2',
    dueDate: '2023-09-10',
    status: 'in progress',
  },
  // Add more tasks here...
];

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h2>Task Dashboard</h2>
      {tasks.map((task, index) => (
        <Task key={index} task={task} />
      ))}
    </div>
  );
}

export default Dashboard;
