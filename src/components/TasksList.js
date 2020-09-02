import React from "react";
import Task from "./Task";
const TasksList = ({ tasks, className, onTaskDeleted, onTaskUpdated }) => {
  return (
    <div className={className}>
      {tasks.map((task) => (
        <Task
          task={task}
          onTaskDeleted={onTaskDeleted}
          onTaskUpdated={onTaskUpdated}
          key={task.id}
        />
      ))}
    </div>
  );
};

export default TasksList;
