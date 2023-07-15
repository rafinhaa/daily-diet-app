import { styled, css } from "styled-components/native";

type StyledSelectButtonProps = {
  isSelected: boolean;
  variant: "first" | "second";
};

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  gap: 8px;
`;

export const SelectButton = styled.TouchableOpacity<StyledSelectButtonProps>`
  flex: 1;
  max-height: 50px;
  flex-direction: row;
  gap: 12px;
  justify-content: center;
  align-items: center;
  padding: 16px 24px;
  border-radius: 6px;

  ${({ theme, isSelected, variant }) =>
    variant === "first" &&
    css`
      background-color: ${isSelected
        ? theme.COLORS.GREEN_LIGHT
        : theme.COLORS.GRAY_200};
      border: 1px solid ${isSelected ? theme.COLORS.GREEN_DARK : "transparent"};
    `}

  ${({ theme, isSelected, variant }) =>
    variant === "second" &&
    css`
      background-color: ${isSelected
        ? theme.COLORS.RED_LIGHT
        : theme.COLORS.GRAY_200};
      border: 1px solid ${isSelected ? theme.COLORS.RED_DARK : "transparent"};
    `}
`;
