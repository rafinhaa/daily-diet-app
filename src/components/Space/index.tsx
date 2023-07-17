import { FC } from "react";

import { Container } from "./styles";

import { SpaceProps } from "./types";

const Space: FC<SpaceProps> = ({ size = 16 }) => {
  return <Container size={size} />;
};

export default Space;
