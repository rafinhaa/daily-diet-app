import { FC, useState } from "react";
import { Container, Logo } from "./styles";
import { Button, Input, Modal, Space } from "@components";

import logo from "@assets/images/logo.png";
import { useAuth } from "@hooks";
import { useNavigation } from "@react-navigation/native";

const SignIn: FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showModal, setShowModal] = useState(false);

  const { navigate } = useNavigation();
  const { signIn, isLoadingSignIn, signInError } = useAuth();

  const handlePressSignIn = async () => {
    try {
      await signIn({
        email,
        password,
      });
    } catch {
      setShowModal(true);
    }
  };

  const handlePressNewAccount = () => {
    navigate("NewAccount");
  };

  return (
    <Container>
      <Logo source={logo} />
      <Input
        label="Email"
        autoCorrect={false}
        autoCapitalize="none"
        keyboardType="email-address"
        onChangeText={setEmail}
      />
      <Space size={12} />
      <Input
        label="Senha"
        secureTextEntry={true}
        autoCorrect={false}
        onChangeText={setPassword}
      />
      <Space size={16} />
      <Button
        label="Entrar"
        onPress={handlePressSignIn}
        isLoading={isLoadingSignIn}
      />
      <Space size={16} />
      <Button
        variant="tertiary"
        label="Criar conta"
        onPress={handlePressNewAccount}
      />
      <Modal
        visible={showModal}
        title={signInError}
        primaryButtonLabel="Ok"
        onRequestConfirm={() => setShowModal(false)}
      />
    </Container>
  );
};

export default SignIn;
