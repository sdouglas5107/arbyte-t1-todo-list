import React, { useEffect, useState } from "react";
import ScreenTitle from "../components/ScreenTitle";
import Button from "../components/Button";
import TasksList from "../components/TasksList";
import TextInputWithIcon from "../components/TextInputWithIcon";
import { getTasks, createTask } from "../api/task";

const TasksScreen = ({ history }) => {
  const [newTaskDescription, setNewTaskDescription] = useState("");
  const [tasks, setTasks] = useState([]);

  const listTasks = async () => {
    const tasks = await getTasks();
    setTasks(tasks);
  };

  const newTask = async () => {
    await createTask({ description: newTaskDescription });
    listTasks();
    setNewTaskDescription("");
  };

  useEffect(() => {
    listTasks();
  }, []);

  const onTaskDeleted = (task) => {
    console.log("OnTaskDeleted", task);
  };

  const onTaskUpdated = (task) => {
    console.log("OnTaskUpdated", task);
  };
  return (
    <>
      <ScreenTitle>Olá Douglas,</ScreenTitle>
      <h3>Aqui estão suas tarefas</h3>

      <TextInputWithIcon
        placeholder="Digite uma tarefa"
        onChangeText={setNewTaskDescription}
        onPress={newTask}
        icon="plus"
      ></TextInputWithIcon>

      <TasksList
        className="margin-top-50px"
        tasks={tasks}
        onTaskUpdated={onTaskUpdated}
        onTaskDeleted={onTaskDeleted}
      ></TasksList>

      <Button onPress={() => history.push("/login")}>Sair</Button>
    </>
  );
};

export default TasksScreen;
