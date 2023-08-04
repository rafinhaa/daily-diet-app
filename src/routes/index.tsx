import { NavigationContainer } from "@react-navigation/native";
import { AppRoutes } from "./app.routes";
import { useAuth } from "@hooks";
import { SignInRoutes } from "./signIn.routes";
import { MealsProvider } from "@contexts";

export const Routes = () => {
  const { user } = useAuth();

  return (
    <NavigationContainer>
      {user ? (
        <MealsProvider userId={user.id}>
          <AppRoutes />
        </MealsProvider>
      ) : (
        <SignInRoutes />
      )}
    </NavigationContainer>
  );
};
