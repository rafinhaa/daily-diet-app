import { FC } from "react";

import { Container, Title, Description, ArrowUpRight } from "./styles";

import { CardProps } from "./types";

const Card: FC<CardProps> = ({
  title,
  description,
  titleSize = "EXTRA_LARGE",
  type,
  onCardPress,
  containerContentStyle,
}) => {
  const hasCardPress = !!onCardPress;
  const opacity = hasCardPress ? 0.5 : 1;

  const IconMapping: FC<{
    isVisible: boolean;
  }> = ({ isVisible }) => {
    if (!isVisible) return null;

    return <ArrowUpRight type={type} />;
  };

  return (
    <Container
      type={type}
      activeOpacity={opacity}
      large={hasCardPress}
      onPress={onCardPress}
      style={containerContentStyle}
    >
      <IconMapping isVisible={titleSize === "SUPER_LARGE"} />
      <Title size={titleSize}>{title}</Title>
      <Description>{description}</Description>
    </Container>
  );
};

export default Card;
