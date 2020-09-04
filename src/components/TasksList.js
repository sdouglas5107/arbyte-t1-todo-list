import React from "react";
import Task from "./Task";
import { connect } from "react-redux";

const TasksList = ({ tasks, className, onTaskDeleted, onTaskUpdated }) => {
  return (
    <div className={className}>
      {tasks
        .sort((task1, task2) => task1.completed - task2.completed)
        .map((task) => (
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

const mapStoreToProps = (store) => {
  return {
    tasks: store.tasks,
  };
};

export default connect(mapStoreToProps)(TasksList);
