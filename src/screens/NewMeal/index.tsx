import { FC, useState } from "react";
import { Container, Form, FormRow, SelectWrapper } from "./styles";
import { View } from "react-native";
import { useAuth, useMeals } from "@hooks";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Button,
  Header,
  Input,
  Modal,
  ScreenContent,
  Select,
  Space,
  TextError,
  Typographic,
} from "@components";
import { useNavigation } from "@react-navigation/native";

const newMealFormSchema = z.object({
  name: z
    .string({
      required_error: "Nome da refeição é obrigatório",
    })
    .min(2, "Nome deve ter no mínimo 2 caracteres"),
  description: z
    .string({
      required_error: "Descrição da refeição é obrigatória",
    })
    .min(10, "Descrição deve ter no mínimo 10 caracteres"),
  date: z
    .string({
      required_error: "Digite a data da refeição",
    })
    .refine((value) => {
      return /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/.test(value);
    }, "Data inválida"),
  time: z
    .string({
      required_error: "Digite a hora de refeição",
    })
    .refine((value) => {
      return /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/.test(value);
    }, "Hora inválida"),
  onTheDiet: z
    .enum(["Sim", "Não"], {
      required_error: "Selecione se a refeição está dentro da dieta",
    })
    .nullable(),
});

type NewMealFormInputs = z.infer<typeof newMealFormSchema>;

const NewMeal: FC = () => {
  const { createNewMeal } = useMeals();
  const { goBack } = useNavigation();
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const {
    control,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = useForm<NewMealFormInputs>({
    resolver: zodResolver(newMealFormSchema),
  });

  const formatTime = (text: string) => {
    const numericText = text.replace(/\D/g, "");
    if (numericText.length <= 2) {
      return numericText;
    }
    return `${numericText.slice(0, 2)}:${numericText.slice(2, 4)}`;
  };

  const formatDate = (text: string) => {
    const numericText = text.replace(/\D/g, "");
    if (numericText.length <= 2) {
      return numericText;
    }
    if (numericText.length <= 4) {
      return `${numericText.slice(0, 2)}/${numericText.slice(2, 4)}`;
    }
    return `${numericText.slice(0, 2)}/${numericText.slice(
      2,
      4
    )}/${numericText.slice(4, 8)}`;
  };

  const formatDateTimeToISO = (date: string, time: string) => {
    const [day, month, year] = date.split("/");
    const formattedDate = `${year}-${month}-${day}`;

    const formattedTime = `${time}:00.000Z`;

    const isoFormattedDateTime = `${formattedDate}T${formattedTime}`;

    return isoFormattedDateTime;
  };

  const handlePressNewMeal = async (data: NewMealFormInputs) => {
    try {
      await createNewMeal({
        name: data.name,
        description: data.description,
        eatedAt: formatDateTimeToISO(data.date, data.time),
        onTheDiet: data.onTheDiet === "Sim" ? true : false,
      });
      reset();
      setShowConfirmationModal(true);
    } catch (error) {
      setErrorMessage(error as string);
      setShowErrorModal(true);
    }
  };

  return (
    <Container>
      <Header title="Nova refeição" type="info" />
      <ScreenContent>
        <Space size={32} />
        <Form>
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

          <Controller
            name="description"
            control={control}
            render={({ field: { onChange, value } }) => (
              <Input
                label="Descrição"
                multiline={true}
                numberOfLines={5}
                error={errors?.description?.message}
                onChangeText={onChange}
                value={value}
                style={{ textAlignVertical: "top" }}
              />
            )}
          />
          <FormRow>
            <Controller
              name="date"
              control={control}
              render={({ field: { onChange, value } }) => (
                <Input
                  label="Data"
                  onChangeText={(text) => onChange(formatDate(text))}
                  value={value}
                  keyboardType="numeric"
                  error={errors?.date?.message}
                  containerStyle={{ width: "47.6%" }}
                />
              )}
            />
            <Controller
              name="time"
              control={control}
              render={({ field: { onChange, value } }) => (
                <Input
                  label="Hora"
                  onChangeText={(text) => onChange(formatTime(text))}
                  value={value}
                  keyboardType="numeric"
                  error={errors?.time?.message}
                  containerStyle={{ width: "47.6%" }}
                />
              )}
            />
          </FormRow>
          <Controller
            name="onTheDiet"
            control={control}
            render={({ field: { onChange, value } }) => (
              <View>
                <SelectWrapper>
                  <Typographic.Title size="SMALL">
                    Está dentro da dieta?
                  </Typographic.Title>
                  <Select
                    onSelect={(option) => onChange(option)}
                    selected={value}
                  />
                </SelectWrapper>
                <TextError message={errors?.onTheDiet?.message} />
              </View>
            )}
          />
        </Form>
        <Button
          label="Cadastrar refeição"
          onPress={handleSubmit(handlePressNewMeal)}
          isLoading={isSubmitting}
        />
        <Space size={32} />
      </ScreenContent>
      <Modal
        title="Nova refeição cadastrada"
        primaryButtonLabel="OK"
        secondaryButtonLabel="Voltar"
        visible={showConfirmationModal}
        onRequestClose={goBack}
        onRequestConfirm={() => {
          setShowConfirmationModal(false);
        }}
      />
      <Modal
        title={errorMessage}
        primaryButtonLabel="OK"
        visible={showErrorModal}
        onRequestConfirm={() => {
          setShowErrorModal(false);
        }}
      />
    </Container>
  );
};

export default NewMeal;
