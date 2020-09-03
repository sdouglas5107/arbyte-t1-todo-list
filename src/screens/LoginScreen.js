import React, { useState } from "react";
import Button from "../components/Button";
import ScreenTitle from "../components/ScreenTitle";
import TextInput from "../components/TextInput";
import { login } from "../api/user";
const LoginScreen = ({ history }) => {
  const [email, setEmail] = useState("");
  const doLogin = async () => {
    try {
      if (!email /* validação de email */) {
        return alert("Email inválido");
      }
      const userData = await login(email);

      localStorage.setItem("userData", JSON.stringify(userData));

      history.push("/");
    } catch (e) {
      alert("Deu ruim " + e.message);
    }
  };
  return (
    <>
      <ScreenTitle>Login</ScreenTitle>
      <TextInput
        className="margin-top-50px"
        placeholder="seu@email.com"
        onChangeText={(text) => setEmail(text)}
        onEnterPressed={doLogin}
      />
      <Button onPress={doLogin}>Entrar</Button>
      <Button onPress={() => history.push("/signup")}>Cadastrar</Button>
    </>
  );
};

export default LoginScreen;
