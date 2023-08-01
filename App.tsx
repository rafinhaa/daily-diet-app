import React, { FC } from "react";
import { ThemeProvider } from "styled-components/native";
import {
  useFonts,
  Nunito_400Regular,
  Nunito_700Bold,
} from "@expo-google-fonts/nunito";

import { theme } from "@theme/lightTheme";
import { Loading } from "@components";
import { AuthProvider } from "@contexts/Auth";
import { Routes } from "@routes/index";

const App: FC = () => {
  const [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_700Bold,
  });

  const RenderApp: FC<{
    fontsLoaded: boolean;
  }> = ({ fontsLoaded }) =>
    fontsLoaded ? (
      <AuthProvider>
        <Routes />
      </AuthProvider>
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
