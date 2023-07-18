import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 24px;
`;

export const FeedbackImage = styled.Image.attrs({
  resizeMode: "contain",
})`
  height: 288px;
  width: 224px;
`;
