import { FC, useCallback, useEffect, useState } from "react";
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
import {
  RouteProp,
  useFocusEffect,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { AppRoutesParamList } from "@routes/app.routes";
import { useMeals } from "@hooks";
import { Meal } from "@services/meals/getMeals/types";

const ViewMeal: FC = () => {
  const [showModal, setShowModal] = useState(false);
  const { params } = useRoute<RouteProp<AppRoutesParamList, "ViewMeal">>();
  const { goBack, navigate } = useNavigation();
  const { deleteViewedMeal, meals } = useMeals();

  const [meal, setMeal] = useState<Meal>({} as Meal);

  const handlePressDeleteMeal = () => {
    setShowModal(true);
  };

  const handlePressOnConfirmDeleteMeal = async () => {
    await deleteViewedMeal(params.mealId);
    setShowModal(false);
    goBack();
  };

  const handlePressEditMeal = () => {
    navigate("NewMeal", {
      meal: meal!,
    });
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

  useFocusEffect(
    useCallback(() => {
      setMeal(meals.find((meal) => meal.id === params.mealId)!);
    }, [meals])
  );

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
        <Button
          icon="edit"
          label="Editar refeição"
          onPress={handlePressEditMeal}
        />
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
