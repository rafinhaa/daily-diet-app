import { FC } from "react";
import { Container, Form, FormRow, SelectWrapper } from "./styles";
import {
  Button,
  Header,
  Input,
  ScreenContent,
  Select,
  Space,
  Typographic,
} from "@components";

const NewMeal: FC = () => {
  return (
    <Container>
      <Header title="Nova refeição" type="info" />
      <ScreenContent>
        <Space size={32} />
        <Form>
          <Input label="Nome" />
          <Input
            label="Descrição"
            multiline={true}
            numberOfLines={5}
            style={{ textAlignVertical: "top" }}
          />
          <FormRow>
            <Input label="Data" containerStyle={{ width: "47.6%" }} />
            <Input label="Hora" containerStyle={{ width: "47.6%" }} />
          </FormRow>
          <SelectWrapper>
            <Typographic.Title size="SMALL">
              Está dentro da dieta?
            </Typographic.Title>
            <Select onSelect={() => {}} />
          </SelectWrapper>
        </Form>
        <Button label="Cadastrar refeição" />
        <Space size={32} />
      </ScreenContent>
    </Container>
  );
};

export default NewMeal;
