import { TouchableOpacityProps } from "react-native";

export type MealItemProps = TouchableOpacityProps & {
  time: string;
  meal: string;
  isDiet: boolean;
};
