import { styled, css } from "styled-components/native";

import { SpaceProps } from "./types";

export const Container = styled.View<SpaceProps>`
  height: ${(props) => props.size}px;
`;
