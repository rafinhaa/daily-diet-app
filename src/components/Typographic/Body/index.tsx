import { FC } from "react";
import { BodyProps } from "./types";
import { BodyStyled } from "./styles";

const Body: FC<BodyProps> = ({
  size = "MEDIUM",
  color = "GRAY_700",
  bold = true,
  children,
  ...rest
}) => {
  return (
    <BodyStyled size={size} color={color} bold={bold} {...rest}>
      {children}
    </BodyStyled>
  );
};

export default Body;
