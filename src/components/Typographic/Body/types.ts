import { TextProps } from "react-native";
import { DefaultTheme } from "styled-components/native";

export type BodyProps = TextProps & {
  size?: keyof Pick<DefaultTheme["FONT_SIZE"], "TINY" | "SMALL" | "MEDIUM">;
  color?: keyof DefaultTheme["COLORS"];
  bold?: boolean;
};
