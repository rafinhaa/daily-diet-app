import { FC } from "react";
import { CardContent, CardRow, Container } from "./styles";
import { Card, Header, ScreenContent, Space, Typographic } from "@components";
import { useMeals } from "@hooks";
import { toPercent } from "@utils";

const Stats: FC = () => {
  const { stats, statsInfo } = useMeals();

  return (
    <Container>
      <Header type={statsInfo}>
        <Typographic.Title size="SUPER_LARGE">
          {toPercent(stats.dietPercentage)}
        </Typographic.Title>
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
            title={stats.bestSequence}
            description="melhor sequência de pratos dentro da dieta"
            type="info"
          />
          <Card
            title={stats.totalMeals}
            description="refeições registradas"
            type="info"
          />
          <CardRow>
            <Card
              title={stats.dietMeals}
              description="refeições dentro da dieta"
              type="primary"
              containerContentStyle={{ flex: 1 }}
            />
            <Card
              title={stats.nonDietMeals}
              description="refeições fora da dieta"
              type="secondary"
              containerContentStyle={{ flex: 1 }}
            />
          </CardRow>
        </CardContent>
      </ScreenContent>
    </Container>
  );
};

export default Stats;
