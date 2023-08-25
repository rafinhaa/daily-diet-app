import { styled, css } from "styled-components/native";
import Typographic from "@components/Typographic";
import { ArrowUpRight as Icon } from "phosphor-react-native";

import { CardProps } from "./types";

type StyledCardProps = Pick<CardProps, "type"> & {
  large?: boolean;
};

export const Container = styled.TouchableOpacity<StyledCardProps>`
  padding: ${({ large }) => (large ? "20px 16px" : "16px")};
  align-items: center;
  justify-content: center;
  border-radius: 8px;

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
      background-color: ${theme.COLORS.GRAY_200};
    `}
`;

export const Title = styled(Typographic.Title).attrs({
  bold: true,
})`
  text-align: center;
  margin-bottom: 8px;
`;

export const Description = styled(Typographic.Body).attrs({
  bold: false,
  size: "SMALL",
})`
  text-align: center;
`;

export const ArrowUpRight = styled(Icon).attrs<StyledCardProps>(
  ({ theme, type }) => ({
    size: 24,
    color: type === "primary" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
  })
)`
  position: absolute;
  top: 5px;
  right: 5px;
`;
