import Axios from "axios";
const baseUrl = "https://arbyte-todo-list-api.herokuapp.com";

function getToken() {
  const userData = localStorage.getItem("userData");
  const { token } = JSON.parse(userData);
  return token;
}

export async function getTasks(token = getToken()) {
  const response = await Axios.get(`${baseUrl}/tasks`, {
    headers: { authorization: `Bearer ${token}` },
  });

  return response.data;
}

export async function createTask(task, token = getToken()) {
  const response = await Axios.post(`${baseUrl}/tasks`, task, {
    headers: { authorization: `Bearer ${token}` },
  });

  return response.data;
}

export async function deleteTask(id) {
  await Axios.delete(`${baseUrl}/tasks/${id}`, {
    headers: { authorization: `Bearer ${getToken()}` },
  });
}

export async function updateTask(id, task) {
  const response = await Axios.put(`${baseUrl}/tasks/${id}`, task, {
    headers: { authorization: `Bearer ${getToken()}` },
  });
  return response.data;
}
