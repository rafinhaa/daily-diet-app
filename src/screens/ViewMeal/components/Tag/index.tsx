import { FC } from "react";
import { Container } from "./styles";
import { Typographic } from "@components";
import { Circle } from "phosphor-react-native";
import { TagProps } from "./types";
import { useTheme } from "styled-components/native";

const Tag: FC<TagProps> = ({ diet }) => {
  const { COLORS } = useTheme();

  const color = diet ? COLORS.GREEN_DARK : COLORS.RED_DARK;

  const text = diet ? "dentro da dieta" : "fora da dieta";

  return (
    <Container>
      <Circle size={8} weight="fill" color={color} />
      <Typographic.Body>{text}</Typographic.Body>
    </Container>
  );
};

export default Tag;
