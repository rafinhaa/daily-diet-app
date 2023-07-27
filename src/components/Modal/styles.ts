import styled from "styled-components/native";
import Typographic from "@components/Typographic";

export const Container = styled.Modal``;

export const Backdrop = styled.TouchableOpacity.attrs({
  activeOpacity: 1,
})`
  position: absolute;
  top: 0px;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  flex: 1;
`;

export const ButtonWrapper = styled.View`
  flex-direction: row;
  gap: 12px;
`;

export const Content = styled.View<{ topDistance: number }>`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  padding: 24px;
  border-radius: 8px;

  margin: 0px 24px;
  justify-content: center;
  align-items: center;
  top: ${({ topDistance }) => topDistance}px;
`;

export const Title = styled(Typographic.Title).attrs({ size: "LARGE" })`
  text-align: center;
`;
