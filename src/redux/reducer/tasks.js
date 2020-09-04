const replaceTask = (tasks, id, task) => {
  const indexOf = tasks.findIndex((currentTask) => currentTask.id === id);
  const args = [indexOf, 1];
  if (task) {
    args.push(task);
  }
  tasks.splice(...args);

  return [...tasks];
};

const initialState = { tasks: [] };

const handleTasks = (store = initialState, action) => {
  switch (action.type) {
    case "LIST_TASKS":
      return { ...store, tasks: action.tasks };
    case "CREATE_TASK":
      return { ...store, tasks: [...store.tasks, action.task] };
    case "UPDATE_TASK":
      return {
        ...store,
        tasks: replaceTask(store.tasks, action.task.id, action.task),
      };
    case "DELETE_TASK":
      return { ...store, tasks: replaceTask(store.tasks, action.task.id) };
    default:
      return store;
  }
};

export default handleTasks;
