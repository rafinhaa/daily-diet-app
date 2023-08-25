import { FC, useState } from "react";
import { Container, Form, FormRow, SelectWrapper } from "./styles";
import { View } from "react-native";
import { useMeals } from "@hooks";
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
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { AppRoutesParamList } from "@routes/app.routes";

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
  const { editTheMeal, createNewMeal } = useMeals();
  const { navigate } = useNavigation();
  const { params } = useRoute<RouteProp<AppRoutesParamList, "NewMeal">>();

  const editMeal: NewMealFormInputs = (() => {
    if (!params?.meal)
      return {
        name: "",
        description: "",
        onTheDiet: null,
        date: "",
        time: "",
      };

    const dateString = params.meal.eatedAt;
    const date = new Date(dateString);

    const year = date.getUTCFullYear();
    const month = date.getUTCMonth().toString().padStart(2, "0");
    const day = date.getUTCDate().toString().padStart(2, "0");

    const hours = (date.getUTCHours() - 3).toString().padStart(2, "0");
    const minutes = date.getUTCMinutes().toString().padStart(2, "0");

    return {
      name: params.meal.name,
      description: params.meal.description,
      onTheDiet: params.meal.onTheDiet === 1 ? "Sim" : "Não",
      date: `${day}/${month}/${year}`,
      time: `${hours}:${minutes}`,
    };
  })();

  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const {
    control,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<NewMealFormInputs>({
    resolver: zodResolver(newMealFormSchema),
    defaultValues: editMeal,
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

  const handlePressActionButton = async (data: NewMealFormInputs) => {
    try {
      const action = params?.meal ? editTheMeal : createNewMeal;

      await action({
        id: params?.meal?.id,
        name: data.name,
        description: data.description,
        eatedAt: formatDateTimeToISO(data.date, data.time),
        onTheDiet: data.onTheDiet === "Sim" ? true : false,
      });
      navigate("Feedback", {
        status: data.onTheDiet === "Sim" ? "success" : "fail",
      });
    } catch (error) {
      setErrorMessage(error as string);
      setShowErrorModal(true);
    }
  };

  return (
    <Container>
      <Header
        title={params?.meal ? "Editar refeição" : "Nova refeição"}
        type="info"
      />
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
          label={params?.meal ? "Salvar alterações" : "Cadastrar refeição"}
          onPress={handleSubmit(handlePressActionButton)}
          isLoading={isSubmitting}
        />
        <Space size={32} />
      </ScreenContent>
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
