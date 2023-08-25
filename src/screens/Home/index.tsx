import { FC, useState } from "react";
import { Container, Header, Logo, User } from "./styles";
import { Button, Card, Modal, Space, Typographic } from "@components";

import logo from "@assets/images/logo.png";
import user from "@assets/images/user.png";
import { Pressable, SectionList, Touchable } from "react-native";
import { MealItem } from "./components";
import { useNavigation } from "@react-navigation/native";
import { useAuth, useMeals } from "@hooks";
import { toPercent } from "@utils";

interface ListMeal {
  id: string;
  meal: string;
  isDiet: boolean;
  time: string;
}

interface DateEntry {
  title: string;
  data: ListMeal[];
}

const Home: FC = () => {
  const { stats, statsInfo, meals } = useMeals();
  const { logout } = useAuth();
  const { navigate } = useNavigation();
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const listMeals = meals.reduce((listMeals: DateEntry[], item) => {
    const createdAtDate = new Date(item.eatedAt);
    const formattedDate = `${createdAtDate.getDate()}.${
      createdAtDate.getMonth() + 1
    }.${createdAtDate.getFullYear()}`;

    createdAtDate.setHours(createdAtDate.getHours() + 3);

    const meal = {
      id: item.id,
      meal: item.name,
      isDiet: item.onTheDiet === 1,
      time: createdAtDate.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    const existingDateEntry = listMeals.find(
      (entry) => entry.title === formattedDate
    );

    if (existingDateEntry) {
      existingDateEntry.data.push(meal);
    } else {
      listMeals.push({
        title: formattedDate,
        data: [meal],
      });
    }

    return listMeals;
  }, []);

  const handlePressNewMeal = () => {
    navigate("NewMeal");
  };

  const handlePressMeal = (id: string) => {
    navigate("ViewMeal", { mealId: id });
  };

  const handlePressCardStats = () => {
    navigate("Stats");
  };

  const handlePressLogout = () => {
    setShowLogoutModal(true);
  };

  return (
    <Container>
      <Header>
        <Logo source={logo} />
        <Pressable onPress={handlePressLogout}>
          <User source={user} />
        </Pressable>
      </Header>
      <Space size={32} />
      <Card
        type={statsInfo}
        description="das refeições dentro da dieta"
        title={toPercent(stats.dietPercentage)}
        titleSize="SUPER_LARGE"
        onCardPress={handlePressCardStats}
      />
      <Space size={32} />
      <Typographic.Body bold={false} size="MEDIUM">
        Refeições
      </Typographic.Body>
      <Space size={4} />
      <Button label="Nova refeição" icon="plus" onPress={handlePressNewMeal} />
      <Space size={32} />
      <SectionList
        sections={listMeals}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MealItem
            meal={item.meal}
            isDiet={item.isDiet}
            time={item.time}
            onPress={() => handlePressMeal(item.id)}
          />
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Typographic.Title size="LARGE">{title}</Typographic.Title>
        )}
      />
      <Modal
        visible={showLogoutModal}
        onRequestClose={() => setShowLogoutModal(false)}
        onRequestConfirm={logout}
        title={"Deseja sair?"}
        primaryButtonLabel="Sim"
        secondaryButtonLabel="Não"
      />
    </Container>
  );
};

export default Home;
