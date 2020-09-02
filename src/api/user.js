import Axios from "axios";
const baseUrl = "https://arbyte-todo-list-api.herokuapp.com";

export async function login(email) {
  const response = await Axios.post(`${baseUrl}/users/login`, {
    email,
  });

  return response.data;
}
