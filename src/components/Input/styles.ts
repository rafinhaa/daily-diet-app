import { styled, css } from "styled-components/native";

import Typographic from "@components/Typographic";

export const Container = styled.View`
  flex: 1;
  width: 100%;
  height: 70px;
  max-height: 70px;
`;

export const Content = styled.View<{ focus: boolean }>`
  flex: 1;
  border-radius: 6px;
  height: 48px;
  max-height: 48px;
  padding: 14px;

  border: 1px solid
    ${({ theme, focus }) =>
      focus ? theme.COLORS.GRAY_700 : theme.COLORS.GRAY_300};
`;

export const TextInput = styled.TextInput`
  flex: 1;
  font-family: ${({ theme }) => theme.FONTS.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.MEDIUM}px;
  line-height: ${({ theme }) => theme.LINE_HEIGHT.MEDIUM}px;
`;

export const Label = styled(Typographic.Title).attrs({
  bold: true,
  size: "SMALL",
})`
  color: ${({ theme }) => theme.COLORS.GRAY_600};
`;
