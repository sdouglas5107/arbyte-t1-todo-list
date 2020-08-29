import React from "react";
import Button from "../components/Button";
import ScreenTitle from "../components/ScreenTitle";
import TextInput from "../components/TextInput";
const LoginScreen = ({ history }) => {
  return (
    <>
      <ScreenTitle>Login</ScreenTitle>
      <TextInput
        placeholder="seu@email.com"
        onChangeText={(text) => console.log("Texto", text)}
      />
      <Button onPress={() => history.push("/")}>Entrar</Button>
      <Button onPress={() => history.push("/signup")}>Cadastrar</Button>
    </>
  );
};

export default LoginScreen;
