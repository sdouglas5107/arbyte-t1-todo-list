import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import TasksScreen from "./screens/TasksScreen";
import LoginScreen from "./screens/LoginScreen";
import SignUpScreen from "./screens/SignUpScreen";

function App() {
  return (
    <div className="container">
      <Switch>
        <Route exact path="/" component={TasksScreen}></Route>
        <Route path="/login" component={LoginScreen}></Route>
        <Route path="/signup" component={SignUpScreen}></Route>
      </Switch>
    </div>
  );
}

export default App;
