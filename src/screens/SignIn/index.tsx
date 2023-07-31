import { FC } from "react";
import { Container, Logo } from "./styles";
import { Button, Input, Space } from "@components";

import logo from "@assets/images/logo.png";

const SignIn: FC = () => {
  return (
    <Container>
      <Logo source={logo} />
      <Input label="Email" autoCorrect={false} keyboardType="email-address" />
      <Space size={12} />
      <Input label="Senha" secureTextEntry={true} autoCorrect={false} />
      <Space size={16} />
      <Button label="Entrar" />
    </Container>
  );
};

export default SignIn;
