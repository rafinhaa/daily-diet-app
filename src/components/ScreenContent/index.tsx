import { FC } from "react";

import { Container } from "./styles";

import { ScreenContentProps } from "./types";

const Space: FC<ScreenContentProps> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Space;
