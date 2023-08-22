import { NavigationContainer } from "@react-navigation/native";
import { AppRoutes } from "./app.routes";
import { useAuth } from "@hooks";
import { SignInRoutes } from "./signIn.routes";
import { MealsProvider } from "@contexts";

export const Routes = () => {
  const { user, logout } = useAuth();

  return (
    <NavigationContainer>
      {user ? (
        <MealsProvider userId={user.id} logout={logout}>
          <AppRoutes />
        </MealsProvider>
      ) : (
        <SignInRoutes />
      )}
    </NavigationContainer>
  );
};
