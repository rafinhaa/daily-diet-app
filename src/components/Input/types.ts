import { StyleProp, TextInputProps, ViewStyle } from "react-native";

export type InputProps = TextInputProps & {
  label: string;
  containerStyle?: StyleProp<ViewStyle>;
  error?: string;
};
