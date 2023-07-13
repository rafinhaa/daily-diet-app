import { StatusBar } from "expo-status-bar";
import React, { FC } from "react";
import { ThemeProvider, styled } from "styled-components/native";
import {
  useFonts,
  Nunito_400Regular,
  Nunito_700Bold,
} from "@expo-google-fonts/nunito";

import { theme } from "@theme/lightTheme";

const App: FC = () => {
  const [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_700Bold,
  });

  if (!fontsLoaded) return null;

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
  font-family: ${(props) => props.theme.FONTS.BOLD};
  font-size: ${(props) => props.theme.FONT_SIZE.EXTRA_LARGE}px;
  line-height: ${(props) => props.theme.FONT_SIZE.EXTRA_LARGE}px;
`;
