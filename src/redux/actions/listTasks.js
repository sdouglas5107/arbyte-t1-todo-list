export default function listTasks(tasks) {
  return {
    type: "LIST_TASKS",
    tasks,
  };
}
