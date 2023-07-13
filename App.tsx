import { StatusBar } from "expo-status-bar";
import React, { FC } from "react";
import { ThemeProvider, styled } from "styled-components/native";
import { theme } from "@theme/lightTheme";

const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Text>Open up App.tsx to start working on your app!</Text>
        <StatusBar style="auto" />
      </Container>
    </ThemeProvider>
  );
};

export default App;

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.COLORS.GRAY_700};
`;

const Text = styled.Text`
  color: ${(props) => props.theme.COLORS.WHITE};
`;
