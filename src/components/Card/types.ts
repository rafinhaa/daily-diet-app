import { DefaultTheme } from "styled-components/native";

export type CardProps<T> = {
  title: T;
  description: string;
  type: "primary" | "secondary" | "info";
  titleSize?: keyof Pick<
    DefaultTheme["FONT_SIZE"],
    "EXTRA_LARGE" | "SUPER_LARGE"
  >;
  onCardPress?: () => void;
};
