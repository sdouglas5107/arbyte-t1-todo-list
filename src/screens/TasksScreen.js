import React, { useEffect, useState } from "react";
import ScreenTitle from "../components/ScreenTitle";
import Button from "../components/Button";
import TasksList from "../components/TasksList";
import TextInputWithIcon from "../components/TextInputWithIcon";
import { getTasks, createTask, deleteTask, updateTask } from "../api/task";
import { isLoggedIn } from "../api/user";
import { connect } from "react-redux";
import listTasksAction from "../redux/actions/listTasks";
import createTaskAction from "../redux/actions/createTask";
import deleteTaskAction from "../redux/actions/deleteTask";
import updateTaskAction from "../redux/actions/updateTask";

const TasksScreen = ({ history, dispatch }) => {
  const [newTaskDescription, setNewTaskDescription] = useState("");

  useEffect(() => {
    if (isLoggedIn()) {
      listTasks();
      return;
    } else {
      history.push("/login");
    }
  }, []);

  const listTasks = async () => {
    const tasks = await getTasks();
    dispatch(listTasksAction(tasks));
  };

  const newTask = async () => {
    setNewTaskDescription("");
    const created = await createTask({ description: newTaskDescription });
    dispatch(createTaskAction(created));
  };

  const onTaskDeleted = async (task) => {
    await deleteTask(task.id);
    dispatch(deleteTaskAction(task));
  };

  const onTaskUpdated = async (task) => {
    const updated = await updateTask(task.id, task);
    dispatch(updateTaskAction(updated));
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
        onTaskUpdated={onTaskUpdated}
        onTaskDeleted={onTaskDeleted}
      ></TasksList>

      <Button onPress={() => history.push("/login")}>Sair</Button>
    </>
  );
};

export default connect()(TasksScreen);
