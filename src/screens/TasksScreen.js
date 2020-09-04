import React, { useEffect, useState } from "react";
import ScreenTitle from "../components/ScreenTitle";
import Button from "../components/Button";
import TasksList from "../components/TasksList";
import TextInputWithIcon from "../components/TextInputWithIcon";
import { getTasks, createTask, deleteTask, updateTask } from "../api/task";
import { isLoggedIn } from "../api/user";
import { connect } from "react-redux";

const TasksScreen = ({ history }) => {
  const [newTaskDescription, setNewTaskDescription] = useState("");
  const [tasks, setTasks] = useState([]);

  const listTasks = async () => {
    const tasks = await getTasks();
    setTasks(tasks);
  };

  const newTask = async () => {
    setNewTaskDescription("");
    await createTask({ description: newTaskDescription });
    listTasks();
  };

  useEffect(() => {
    if (isLoggedIn()) {
      listTasks();
      return;
    } else {
      history.push("/login");
    }
  }, [history]);

  const onTaskDeleted = async (task) => {
    await deleteTask(task.id);
    listTasks();
  };

  const onTaskUpdated = async (task) => {
    await updateTask(task.id, task);
    listTasks();
  };
  return (
    <>
      <ScreenTitle>Olá Douglas,</ScreenTitle>
      <h3>Aqui estão suas tarefas</h3>

      <TextInputWithIcon
        placeholder="Digite uma tarefa"
        onChangeText={setNewTaskDescription}
        onPress={newTask}
        value={newTaskDescription}
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

const mapStoreToProps = (store) => {
  return {
    tasks: store.tasks,
  };
};

export default connect(mapStoreToProps)(TasksScreen);
