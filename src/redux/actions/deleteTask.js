export default function deleteTask(task) {
  return {
    type: "DELETE_TASK",
    task,
  };
}
