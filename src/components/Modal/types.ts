import { ModalBaseProps } from "react-native";

export type ModalProps = ModalBaseProps & {
  onRequestConfirm: () => void;
  title: string | null;
  primaryButtonLabel: string;
  secondaryButtonLabel?: string;
};
