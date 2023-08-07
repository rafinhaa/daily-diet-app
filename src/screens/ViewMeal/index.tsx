import { FC, useState } from "react";
import { Container, MealInfo } from "./styles";
import {
  Button,
  Header,
  Modal,
  ScreenContent,
  Space,
  Typographic,
} from "@components";
import { Tag } from "./components";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { deleteMeal, getMeal } from "@services/index";
import { AppRoutesParamList } from "@routes/app.routes";

const ViewMeal: FC = () => {
  const [showModal, setShowModal] = useState(false);
  const { params } = useRoute<RouteProp<AppRoutesParamList, "ViewMeal">>();
  const { goBack } = useNavigation();

  const { data: meal } = getMeal({
    makeRequest: true,
    mealId: params.mealId,
  });

  const { handleDeleteMeal } = deleteMeal({
    mealId: params.mealId,
  });

  const handlePressDeleteMeal = () => {
    setShowModal(true);
  };

  const handlePressOnConfirmDeleteMeal = async () => {
    await handleDeleteMeal();
    setShowModal(false);
    goBack();
  };

  function formatDate(eatedAt: string) {
    const date = new Date(eatedAt);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = String(date.getFullYear()).slice(2);
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");

    return `${day}/${month}/${year} às ${hours}:${minutes}`;
  }

  return (
    <Container>
      <Header
        title="Refeição"
        type={meal?.onTheDiet === 1 ? "primary" : "secondary"}
      />
      <ScreenContent>
        <MealInfo>
          <Space size={32} />
          <Typographic.Title>{meal?.name}</Typographic.Title>
          <Typographic.Body bold={false}>{meal?.description}</Typographic.Body>
          <Space size={24} />
          <Typographic.Title size="SMALL">Data e hora</Typographic.Title>
          <Typographic.Body size="MEDIUM" bold={false}>
            {formatDate(meal?.eatedAt!)}
          </Typographic.Body>
          <Space size={24} />
          <Tag diet={!!meal?.onTheDiet} />
          <Space size={24} />
        </MealInfo>
        <Button icon="edit" label="Editar refeição" />
        <Space size={8} />
        <Button
          variant="secondary"
          icon="delete"
          label="Excluir refeição"
          onPress={handlePressDeleteMeal}
        />
        <Space size={32} />
      </ScreenContent>
      <Modal
        title="Deseja realmente excluir o registro da refeição?"
        primaryButtonLabel="Sim, excluir"
        secondaryButtonLabel="Cancelar"
        visible={showModal}
        onRequestClose={() => setShowModal(false)}
        onRequestConfirm={handlePressOnConfirmDeleteMeal}
      />
    </Container>
  );
};

export default ViewMeal;
