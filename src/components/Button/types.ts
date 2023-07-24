import { TouchableOpacityProps } from "react-native";

export type ButtonProps = TouchableOpacityProps & {
  label: string;
  icon?: "edit" | "delete" | "plus";
  variant?: "primary" | "secondary";
};
