export default function updateTask(task) {
  return {
    type: "UPDATE_TASK",
    task,
  };
}
