import React, { useState } from "react";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity, View, TextInput, Text } from "react-native";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-horizontal: 20px;
  background-color: #f9f9f9;
`;

const Title = styled.Text`
  font-size: 32px;
  font-weight: bold;
  color: #333;
  margin-bottom: 30px;
`;

const InputContainer = styled.View`
  width: 100%;
  margin-bottom: 20px;
  background-color: #fff;
  border-radius: 25px;
  padding-horizontal: 20px;
  padding-vertical: 10px;
  shadow-color: #000;
  shadow-opacity: 0.1;
  shadow-radius: 10px;
  elevation: 5;
`;

const Input = styled(TextInput)`
  width: 100%;
  height: 40px;
  font-size: 16px;
  color: #333;
`;

const SubmitButton = styled(TouchableOpacity)`
  width: 100%;
  height: 50px;
  border-radius: 25px;
  background-color: hotpink;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  flex-direction: row;
  shadow-color: #000;
  shadow-opacity: 0.2;
  shadow-radius: 10px;
  elevation: 5;
`;

const ButtonText = styled(Text)`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  margin-left: 10px;
`;

const LinkText = styled(Text)`
  color: #007bff;
  font-size: 16px;
`;

const LinkButton = styled(TouchableOpacity)`
  margin-top: 20px;
`;

const Login: React.FC<ILogin> = ({ onSubmit, goToRegister }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => onSubmit(email, password);

  return (
    <Container>
      <Title>Login</Title>
      <InputContainer>
        <Input
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={setEmail}
        />
      </InputContainer>
      <InputContainer>
        <Input
          placeholder="Password"
          secureTextEntry
          onChangeText={setPassword}
        />
      </InputContainer>
      <SubmitButton onPress={handleSubmit}>
        <Ionicons name="log-in" size={24} color="#fff" />
        <ButtonText>Submit</ButtonText>
      </SubmitButton>
      <LinkButton onPress={goToRegister}>
        <LinkText>Create an account</LinkText>
      </LinkButton>
    </Container>
  );
};

export default Login;
