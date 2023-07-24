import { styled } from "styled-components/native";

import Typographic from "@components/Typographic";

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding: 12px 14px;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
  margin-bottom: 8px;
  height: 49px;
  min-height: 49px;
  max-height: 49px;
`;

export const Time = styled(Typographic.Body).attrs({
  bold: true,
  size: "TINY",
})``;

export const Meal = styled(Typographic.Body).attrs({
  bold: true,
  size: "MEDIUM",
})`
  flex: 1;
`;

export const Separator = styled.View`
  width: 1px;
  height: 14px;
  margin-right: 12px;
  margin-left: 12px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_300};
`;
