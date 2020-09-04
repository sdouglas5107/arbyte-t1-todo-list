import React, { useState } from "react";
import Icon from "../components/Icon";
import TextInput from "./TextInput";
const Task = ({ task, onTaskUpdated, onTaskDeleted }) => {
  const [completed, setCompleted] = useState(task.completed);
  const [disabled, setDisabled] = useState(true);
  const [description, setDescription] = useState(task.description);

  const onSavePressed = () => {
    onTaskUpdated({ ...task, description });
    setDisabled(true);
  };

  const onCheckChanged = (checked) => {
    onTaskUpdated({ ...task, completed: checked });
    setCompleted(checked);
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={completed}
        onChange={(event) => onCheckChanged(event.target.checked)}
      />
      <TextInput
        value={description}
        onChangeText={(text) => setDescription(text)}
        onEnterPressed={onSavePressed}
        disabled={disabled}
      />
      {disabled ? (
        <Icon icon="edit" onPress={() => setDisabled(false)}></Icon>
      ) : (
        <Icon icon="save" onPress={onSavePressed}></Icon>
      )}

      <Icon icon="trash" onPress={() => onTaskDeleted(task)}></Icon>
    </div>
  );
};

export default Task;
