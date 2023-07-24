import { FC } from "react";
import { Container, Header, Logo, User } from "./styles";
import { Button, Card, Space, Typographic } from "@components";

import logo from "@assets/images/logo.png";
import user from "@assets/images/user.png";
import { SectionList } from "react-native";
import { MealItem } from "./components";

const DATA = [
  {
    title: "12.08.22",
    data: [
      { meal: "X-tudo", isDiet: false, time: "20:00" },
      { meal: "Whey protein com leite", isDiet: true, time: "16:00" },
      {
        meal: "Salada cesar com frango grelado, cebola, pimentão e ovo",
        isDiet: true,
        time: "12:30",
      },
      {
        meal: "Vitamina de banana com leite e granola",
        isDiet: true,
        time: "09:30",
      },
    ],
  },
  {
    title: "11.08.22",
    data: [
      { meal: "X-tudo", isDiet: false, time: "20:00" },
      { meal: "Whey protein com leite", isDiet: true, time: "16:00" },
      {
        meal: "Salada cesar com frango grelado, cebola, pimentão e ovo",
        isDiet: false,
        time: "12:30",
      },
      {
        meal: "Vitamina de banana com leite e granola",
        isDiet: false,
        time: "09:30",
      },
    ],
  },
];

const Home: FC = () => {
  return (
    <Container>
      <Header>
        <Logo source={logo} />
        <User source={user} />
      </Header>
      <Space size={32} />
      <Card
        type="primary"
        description="das refeições dentro da dieta"
        title="90,86%"
        titleSize="SUPER_LARGE"
        onCardPress={() => {}}
      />
      <Space size={32} />
      <Typographic.Body bold={false} size="MEDIUM">
        Refeições
      </Typographic.Body>
      <Space size={4} />
      <Button label="Nova refeição" icon="plus" />
      <Space size={32} />
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item.meal + index}
        renderItem={({ item }) => (
          <MealItem meal={item.meal} isDiet={item.isDiet} time={item.time} />
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Typographic.Title size="LARGE">{title}</Typographic.Title>
        )}
      />
    </Container>
  );
};

export default Home;
