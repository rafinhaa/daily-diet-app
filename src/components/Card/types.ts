import { StyleProp, ViewStyle } from "react-native";
import { DefaultTheme } from "styled-components/native";

export type CardProps = {
  title: string | number;
  description: string;
  type: "primary" | "secondary" | "info";
  titleSize?: keyof Pick<
    DefaultTheme["FONT_SIZE"],
    "EXTRA_LARGE" | "SUPER_LARGE"
  >;
  onCardPress?: () => void;
  containerContentStyle?: StyleProp<ViewStyle>;
};
