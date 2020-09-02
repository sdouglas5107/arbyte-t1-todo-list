import React from "react";
import ScreenTitle from "../components/ScreenTitle";
import Button from "../components/Button";
import TasksList from "../components/TasksList";
import TextInputWithIcon from "../components/TextInputWithIcon";
const tasks = [
  {
    id: 7,
    description: "Subir Essa Api",
    completed: false,
  },
  {
    id: 8,
    description: "Conectar esse App com a API",
    completed: false,
  },
  {
    id: 9,
    description: "Subir o código para o github no final da aula.",
    completed: false,
  },
];
const TasksScreen = ({ history }) => {
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
        onChangeText={console.log}
        onPress={() => console.log("Botão do TextInputWithIcon clicado")}
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
