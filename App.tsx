import React, { FC } from "react";
import { ThemeProvider, styled } from "styled-components/native";
import {
  useFonts,
  Nunito_400Regular,
  Nunito_700Bold,
} from "@expo-google-fonts/nunito";

import { theme } from "@theme/lightTheme";
import { Loading } from "@components";
import { SignIn } from "@screens/index";
import { AuthProvider } from "@contexts/Auth";

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
        <SignIn />
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
