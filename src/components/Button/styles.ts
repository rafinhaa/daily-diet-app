import { styled, css } from "styled-components/native";

import Typographic from "@components/Typographic";

import { ButtonProps } from "./types";

type ButtonPropsStyle = Pick<ButtonProps, "variant">;

export const Container = styled.TouchableOpacity<ButtonPropsStyle>`
  flex: 1;
  max-height: 50px;
  flex-direction: row;
  gap: 12px;
  justify-content: center;
  align-items: center;
  padding: 16px 24px;
  border-radius: 6px;
  ${({ variant, theme, disabled }) =>
    variant === "primary" &&
    css`
      background-color: ${disabled
        ? theme.COLORS.GRAY_600
        : theme.COLORS.GRAY_700};
    `}

  ${({ variant, theme, disabled }) =>
    variant === "secondary" &&
    css`
      background-color: ${disabled
        ? theme.COLORS.GRAY_300
        : theme.COLORS.WHITE};
      border: 1px solid ${theme.COLORS.GRAY_700};
    `}
`;

export const Label = styled(Typographic.Body).attrs({
  bold: true,
  size: "SMALL",
})<ButtonPropsStyle>`
  color: ${({ variant, theme }) =>
    variant === "primary" ? theme.COLORS.WHITE : theme.COLORS.GRAY_700};
`;
