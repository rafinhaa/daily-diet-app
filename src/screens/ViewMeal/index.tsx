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

const ViewMeal: FC = () => {
  const [showModal, setShowModal] = useState(false);

  const handlePressDeleteMeal = () => {
    setShowModal(true);
  };

  return (
    <Container>
      <Header title="Nova refeição" type="primary" />
      <ScreenContent>
        <MealInfo>
          <Space size={32} />
          <Typographic.Title>Sanduíche</Typographic.Title>
          <Typographic.Body bold={false}>
            Sanduíche de pão integral com atum e salada de alface e tomate
          </Typographic.Body>
          <Space size={24} />
          <Typographic.Title size="SMALL">Data e hora</Typographic.Title>
          <Typographic.Body size="MEDIUM" bold={false}>
            12/08/2022 ás 16:00
          </Typographic.Body>
          <Space size={24} />
          <Tag diet />
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
        onRequestConfirm={() => {}}
      />
    </Container>
  );
};

export default ViewMeal;
