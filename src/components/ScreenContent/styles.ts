import { styled, css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding: 0 24px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  margin-top: -20px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;
