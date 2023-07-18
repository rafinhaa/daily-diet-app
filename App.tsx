import { StatusBar } from "expo-status-bar";
import React, { FC } from "react";
import { ThemeProvider, styled } from "styled-components/native";
import {
  useFonts,
  Nunito_400Regular,
  Nunito_700Bold,
} from "@expo-google-fonts/nunito";

import { theme } from "@theme/lightTheme";
import { Input, Loading, Typographic } from "@components";
import { TextInput } from "react-native";
import { NewMeal } from "@screens/index";

const App: FC = () => {
  const [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_700Bold,
  });

  const RenderApp: FC<{
    fontsLoaded: boolean;
  }> = ({ fontsLoaded }) => (fontsLoaded ? <NewMeal /> : <Loading />);

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
  padding: 20px;
`;
