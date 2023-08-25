import { FC, useState } from "react";
import { Container } from "./styles";
import {
  Button,
  Header,
  Input,
  Modal,
  ScreenContent,
  Space,
} from "@components";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import useAuth from "@hooks/useAuth";

const newAccountFormSchema = z
  .object({
    name: z
      .string({
        required_error: "Seu nome é obrigatório",
      })
      .min(2, "Nome deve ter no mínimo 2 caracteres"),
    email: z
      .string({
        required_error: "Email é obrigatório",
      })
      .email({
        message: "Email inválido",
      }),
    password: z
      .string({
        required_error: "Senha é obrigatória",
      })
      .min(8, "Senha deve ter no mínimo 8 caracteres"),
    confirmedPassword: z
      .string({
        required_error: "Confirmação de senha é obrigatória",
      })
      .min(8, "Confirmação de senha deve ter no mínimo 8 caracteres"),
  })
  .refine((data) => data.password === data.confirmedPassword, {
    message: "As senhas não coincidem",
    path: ["confirmedPassword"],
  });

type NewAccountFormInputs = z.infer<typeof newAccountFormSchema>;

const NewAccount: FC = () => {
  const { createNewAccount } = useAuth();
  const [errorMessage, setErrorMessage] = useState<string | null>("");

  const {
    control,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<NewAccountFormInputs>({
    resolver: zodResolver(newAccountFormSchema),
  });

  const handlePressCreateNewAccount = async (data: NewAccountFormInputs) => {
    try {
      await createNewAccount({
        name: data.name,
        email: data.email,
        password: data.password,
        avatarUrl: `https://api.dicebear.com/6.x/initials/svg?seed=${data.name}`,
      });
    } catch (error) {
      setErrorMessage(error as string);
    }
  };

  return (
    <Container>
      <Header title="Criar conta" type="primary" />

      <ScreenContent>
        <Space />
        <Controller
          name="name"
          control={control}
          render={({ field: { onChange, value } }) => (
            <Input
              label="Nome"
              onChangeText={onChange}
              value={value}
              error={errors?.name?.message}
            />
          )}
        />
        <Space />
        <Controller
          name="email"
          control={control}
          render={({ field: { onChange, value } }) => (
            <Input
              label="Email"
              onChangeText={onChange}
              value={value}
              error={errors?.email?.message}
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
            />
          )}
        />
        <Space />
        <Controller
          name="password"
          control={control}
          render={({ field: { onChange, value } }) => (
            <Input
              label="Senha"
              onChangeText={onChange}
              value={value}
              error={errors?.password?.message}
              secureTextEntry={true}
              autoCapitalize="none"
              autoCorrect={false}
            />
          )}
        />
        <Space />
        <Controller
          name="confirmedPassword"
          control={control}
          render={({ field: { onChange, value } }) => (
            <Input
              label="Confirmar senha"
              onChangeText={onChange}
              value={value}
              error={errors?.confirmedPassword?.message}
              secureTextEntry={true}
              autoCapitalize="none"
              autoCorrect={false}
            />
          )}
        />
        <Space />
        <Button
          label="Criar conta"
          onPress={handleSubmit(handlePressCreateNewAccount)}
          isLoading={isSubmitting}
        />
      </ScreenContent>
      <Modal
        title={errorMessage}
        onRequestConfirm={() => setErrorMessage(null)}
        primaryButtonLabel="Ok"
        visible={!!errorMessage}
      />
    </Container>
  );
};

export default NewAccount;
