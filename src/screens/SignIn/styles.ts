import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding: 0px 24px;
  justify-content: center;
`;

export const Logo = styled.Image.attrs({
  resizeMode: "contain",
})`
  width: 200px;
  align-self: center;
`;
