import styled, { css } from "styled-components/native";
import { ArrowLeft } from "phosphor-react-native";

import Typographic from "@components/Typographic";

import { HeaderProps } from "./types";

type StyledHeaderProps = Pick<HeaderProps, "type"> & {
  hasChildren?: boolean;
};

export const Container = styled.View<StyledHeaderProps>`
  width: 100%;
  align-items: center;
  justify-content: center;
  height: ${({ hasChildren }) => (!hasChildren ? 132 : 200)}px;
  padding: 24px;

  ${({ theme, type }) =>
    type === "primary" &&
    css`
      background-color: ${theme.COLORS.GREEN_LIGHT};
    `}

  ${({ theme, type }) =>
    type === "secondary" &&
    css`
      background-color: ${theme.COLORS.RED_LIGHT};
    `}

  ${({ theme, type }) =>
    type === "info" &&
    css`
      background-color: ${theme.COLORS.GRAY_300};
    `}
`;

export const Content = styled.View`
  flex-direction: row;
  width: 100%;
`;

export const BackButton = styled.TouchableOpacity``;

export const BackIcon = styled(ArrowLeft).attrs<HeaderProps>(
  ({ theme, type }) => {
    const color = (() => {
      switch (type) {
        case "primary":
          return theme.COLORS.GREEN_DARK;
        case "secondary":
          return theme.COLORS.RED_DARK;
        case "info":
          return theme.COLORS.GRAY_600;
      }
    })();

    return {
      size: 24,
      color: color,
    };
  }
)``;

export const Title = styled(Typographic.Title).attrs({
  bold: true,
  size: "LARGE",
})`
  flex: 1;
  text-align: center;

  color: ${({ theme }) => theme.COLORS.GRAY_600};
`;
