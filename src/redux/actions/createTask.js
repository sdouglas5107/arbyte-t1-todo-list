export default function createTask(task) {
  return {
    type: "CREATE_TASK",
    task,
  };
}
