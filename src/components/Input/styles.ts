import { styled } from "styled-components/native";

import Typographic from "@components/Typographic";

export const Container = styled.View``;

export const Content = styled.View<{ focus: boolean }>`
  border-radius: 6px;
  padding: 14px;
  width: 100%;

  border: 1px solid
    ${({ theme, focus }) =>
      focus ? theme.COLORS.GRAY_700 : theme.COLORS.GRAY_300};
`;

export const TextInput = styled.TextInput`
  font-family: ${({ theme }) => theme.FONTS.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.MEDIUM}px;
  line-height: ${({ theme }) => theme.LINE_HEIGHT.MEDIUM}px;
`;

export const Label = styled(Typographic.Title).attrs({
  bold: true,
  size: "SMALL",
})`
  width: 100%;
  color: ${({ theme }) => theme.COLORS.GRAY_600};
`;
