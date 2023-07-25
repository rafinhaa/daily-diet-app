import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  width: 144px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_200};
  border-radius: 999px;
`;
