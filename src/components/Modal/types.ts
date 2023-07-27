import { ModalBaseProps } from "react-native";

export type ModalProps = ModalBaseProps & {
  onRequestConfirm: () => void;
  title: string;
  primaryButtonLabel: string;
  secondaryButtonLabel: string;
};
