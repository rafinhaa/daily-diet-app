import { styled, css } from "styled-components/native";
import { BodyProps } from "./types";

export const BodyStyled = styled.Text<
  Pick<BodyProps, "size" | "color" | "bold">
>`
  ${({ theme, size, color, bold }) => css`
    font-size: ${theme.FONT_SIZE[size!]}px;
    font-family: ${bold ? theme.FONTS.BOLD : theme.FONTS.REGULAR};
    line-height: ${theme.LINE_HEIGHT[size!]}px;
    color: ${theme.COLORS[color!]};
  `}
`;
