import { StatusBar } from "expo-status-bar";
import React, { FC } from "react";
import { ThemeProvider, styled } from "styled-components/native";
import {
  useFonts,
  Nunito_400Regular,
  Nunito_700Bold,
} from "@expo-google-fonts/nunito";

import { theme } from "@theme/lightTheme";
import { Loading, Typographic } from "@components";

const App: FC = () => {
  const [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_700Bold,
  });

  const RenderApp: FC<{
    fontsLoaded: boolean;
  }> = ({ fontsLoaded }) =>
    fontsLoaded ? (
      <Container>
        <Typographic.Title>Open up App.tsx</Typographic.Title>
        <Typographic.Body>to start working on your app!</Typographic.Body>
        <StatusBar style="auto" />
      </Container>
    ) : (
      <Loading />
    );

  return (
    <ThemeProvider theme={theme}>
      <RenderApp fontsLoaded={fontsLoaded} />
    </ThemeProvider>
  );
};

export default App;

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.COLORS.WHITE};
`;
