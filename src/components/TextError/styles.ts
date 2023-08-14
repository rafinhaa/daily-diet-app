import { styled, css } from "styled-components/native";

import Typographic from "@components/Typographic";

export const Label = styled(Typographic.Body).attrs({
  bold: false,
  size: "TINY",
})`
  width: 100%;
  color: ${({ theme }) => theme.COLORS.RED_DARK};
`;
