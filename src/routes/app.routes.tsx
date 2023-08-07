import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Feedback, NewMeal, Home, Stats, ViewMeal } from "@screens";

const { Navigator, Screen } = createNativeStackNavigator();

export type AppRoutesParamList = {
  Home: undefined;
  Stats: undefined;
  Feedback: undefined;
  NewMeal: undefined;
  ViewMeal: {
    mealId: string;
  };
};

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Home" component={Home} />
      <Screen name="Stats" component={Stats} />
      <Screen name="Feedback" component={Feedback} />
      <Screen name="NewMeal" component={NewMeal} />
      <Screen name="ViewMeal" component={ViewMeal} />
    </Navigator>
  );
}
