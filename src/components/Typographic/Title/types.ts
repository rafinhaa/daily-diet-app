import { TextProps } from "react-native";
import { DefaultTheme } from "styled-components/native";

export type TitleProps = TextProps & {
  size?: keyof Pick<
    DefaultTheme["FONT_SIZE"],
    "SUPER_LARGE" | "EXTRA_LARGE" | "LARGE" | "SMALL"
  >;
  color?: keyof DefaultTheme["COLORS"];
  bold?: boolean;
};
