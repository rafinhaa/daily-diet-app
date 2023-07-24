import { FC } from "react";

import { Container, Meal, Separator, Time } from "./styles";

import { MealItemProps } from "./types";
import { useTheme } from "styled-components/native";
import { Circle } from "phosphor-react-native";

const MealItem: FC<MealItemProps> = ({ isDiet, time, meal, ...rest }) => {
  const { COLORS } = useTheme();

  const statusColor = isDiet ? COLORS.GREEN_MID : COLORS.RED_MID;

  return (
    <Container activeOpacity={0.9} {...rest}>
      <Time>{time}</Time>
      <Separator />
      <Meal numberOfLines={1}>{meal}</Meal>
      <Circle
        size={14}
        color={statusColor}
        weight="fill"
        style={{ marginLeft: 30 }}
      />
    </Container>
  );
};

export default MealItem;
