import { createStore } from "redux";
import handleTasks from "../reducer/tasks";

const store = createStore(handleTasks);

export default store;
