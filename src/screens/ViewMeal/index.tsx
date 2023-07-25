import { FC } from "react";
import { Container, MealInfo } from "./styles";
import { Button, Header, ScreenContent, Space, Typographic } from "@components";
import { Tag } from "./components";

const ViewMeal: FC = () => {
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
        <Button variant="secondary" icon="delete" label="Excluir refeição" />
        <Space size={32} />
      </ScreenContent>
    </Container>
  );
};

export default ViewMeal;
