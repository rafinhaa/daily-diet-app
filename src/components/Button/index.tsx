import { FC } from "react";
import { PencilSimpleLine, Plus, Trash } from "phosphor-react-native";

import { Container, Label } from "./styles";

import { ButtonProps } from "./types";
import { useTheme } from "styled-components/native";
import Loading from "../Loading";

const Button: FC<ButtonProps> = ({
  label,
  icon,
  variant = "primary",
  isLoading = false,
  ...rest
}) => {
  const { COLORS } = useTheme();

  const IconMapping: FC = () => {
    if (!icon) return null;
    const Icon = {
      edit: PencilSimpleLine,
      delete: Trash,
      plus: Plus,
    }[icon];

    const color = variant === "primary" ? COLORS.WHITE : COLORS.GRAY_700;

    return <Icon size={18} color={color} />;
  };

  return (
    <Container activeOpacity={0.9} variant={variant} {...rest}>
      <IconMapping />
      {isLoading ? <Loading /> : <Label variant={variant}>{label}</Label>}
    </Container>
  );
};

export default Button;
