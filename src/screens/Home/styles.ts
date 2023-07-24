import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding: 0px 24px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Logo = styled.Image.attrs({
  resizeMode: "contain",
})`
  width: 82px;
  height: 37px;
`;

export const User = styled.Image.attrs({
  resizeMode: "contain",
})`
  width: 40px;
  height: 40px;
`;
