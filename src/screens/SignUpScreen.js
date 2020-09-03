import React, { useState } from "react";
import ScreenTitle from "../components/ScreenTitle";
import TextInput from "../components/TextInput";
import Button from "../components/Button";
import { signup } from "../api/user";
const SignUpScreen = ({ history }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");

  const register = async () => {
    try {
      if (!fullName) {
        alert("Nome obrigatório");
        return;
      }
      if (!email) {
        alert("Email obrigatório");
        return;
      }
      await signup({ email, fullName });
      alert("Cadastrado Com Sucesso! Faça Login Para Continuar");
      history.goBack();
    } catch (e) {
      alert("Algo deu errado " + e.message);
    }
  };

  return (
    <>
      <ScreenTitle>Cadastro</ScreenTitle>
      <TextInput
        className="margin-top-50px"
        onChangeText={(text) => setFullName(text)}
        placeholder="Seu Nome"
        onEnterPressed={register}
      ></TextInput>
      <TextInput
        className="margin-top-20px"
        onChangeText={(text) => setEmail(text)}
        placeholder="seu@email.com"
        onEnterPressed={register}
      ></TextInput>
      <Button onPress={register}>Cadastrar</Button>
    </>
  );
};

export default SignUpScreen;
