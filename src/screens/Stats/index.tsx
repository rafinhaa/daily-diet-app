import { FC } from "react";
import { CardContent, CardRow, Container } from "./styles";
import { Card, Header, ScreenContent, Space, Typographic } from "@components";

const Stats: FC = () => {
  return (
    <Container>
      <Header type="primary">
        <Typographic.Title size="SUPER_LARGE">30,21%</Typographic.Title>
        <Typographic.Body bold={false} size="SMALL">
          das refeições da dieta
        </Typographic.Body>
      </Header>
      <ScreenContent>
        <Space size={32} />
        <Typographic.Title size="SMALL" style={{ alignSelf: "center" }}>
          Estatísticas gerais
        </Typographic.Title>
        <Space size={23} />
        <CardContent>
          <Card
            title="4"
            description="melhor sequência de pratos dentro da dieta"
            type="info"
          />
          <Card title="109" description="refeições registradas" type="info" />
          <CardRow>
            <Card
              title="32"
              description="refeições dentro da dieta"
              type="primary"
            />
            <Card
              title="77"
              description="refeições fora da dieta"
              type="secondary"
            />
          </CardRow>
        </CardContent>
      </ScreenContent>
    </Container>
  );
};

export default Stats;
