import Axios from "axios";
const baseUrl = "https://arbyte-todo-list-api.herokuapp.com";

export async function login(email) {
  const response = await Axios.post(`${baseUrl}/users/login`, {
    email,
  });

  return response.data;
}

export async function signup({ email, fullName }) {
  const { data } = await Axios.post(`${baseUrl}/users`, { email, fullName });
  return data;
}

export function isLoggedIn() {
  return !!localStorage.getItem("userData");
}
