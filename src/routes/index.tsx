import { NavigationContainer } from "@react-navigation/native";
import { AppRoutes } from "./app.routes";
import useAuth from "@hooks/useAuth";
import { SignInRoutes } from "./signIn.routes";
import { MealsProvider } from "@contexts/Meals";

export const Routes = () => {
  const { user } = useAuth();

  return (
    <NavigationContainer>
      {user ? (
        <MealsProvider>
          <AppRoutes />
        </MealsProvider>
      ) : (
        <SignInRoutes />
      )}
    </NavigationContainer>
  );
};
