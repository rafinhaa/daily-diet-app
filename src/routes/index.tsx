import { NavigationContainer } from "@react-navigation/native";
import { AppRoutes } from "./app.routes";
import useAuth from "@hooks/useAuth";
import { SignInRoutes } from "./signIn.routes";

export const Routes = () => {
  const { user } = useAuth();

  return (
    <NavigationContainer>
      {user ? <AppRoutes /> : <SignInRoutes />}
    </NavigationContainer>
  );
};
