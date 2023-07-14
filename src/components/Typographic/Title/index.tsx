import { FC } from "react";
import { TitleProps } from "./types";
import { TitleStyled } from "./styles";

const Title: FC<TitleProps> = ({
  size = "LARGE",
  color = "GRAY_700",
  bold = true,
  children,
  ...rest
}) => {
  return (
    <TitleStyled size={size} color={color} bold={bold} {...rest}>
      {children}
    </TitleStyled>
  );
};

export default Title;
