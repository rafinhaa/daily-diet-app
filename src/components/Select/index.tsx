import { FC, useEffect, useState } from "react";
import { Circle } from "phosphor-react-native";
import { useTheme } from "styled-components/native";

import Typographic from "@components/Typographic";

import { Container, SelectButton } from "./styles";

import { SelectOptionsProps, SelectProps } from "./types";

const Select: FC<SelectProps> = ({ onSelect, selected }) => {
  const { COLORS } = useTheme();
  const [isSelected, setIsSelected] = useState<SelectOptionsProps>(null);

  const SelectButtonOption: FC<{
    option: SelectOptionsProps;
    color: string;
    text: string;
    variant: "first" | "second";
  }> = ({ option, color, text, variant }) => (
    <SelectButton
      isSelected={isSelected === option}
      variant={variant}
      onPress={() => handlePressSelectButton(option)}
    >
      <>
        <Circle size={8} color={color} weight="fill" />
        <Typographic.Title bold>{text}</Typographic.Title>
      </>
    </SelectButton>
  );

  const handlePressSelectButton = (option: SelectOptionsProps) => {
    setIsSelected(option);
    onSelect(option);
  };

  useEffect(() => {
    setIsSelected(selected);
  }, [selected]);

  return (
    <Container>
      <SelectButtonOption
        option="Sim"
        color={COLORS.GREEN_DARK}
        text="Sim"
        variant="first"
      />
      <SelectButtonOption
        option="Não"
        color={COLORS.GREEN_DARK}
        text="Não"
        variant="second"
      />
    </Container>
  );
};

export default Select;
