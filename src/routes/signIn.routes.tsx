import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SignIn } from "@screens";

const { Navigator, Screen } = createNativeStackNavigator();

export function SignInRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="SignIn" component={SignIn} />
    </Navigator>
  );
}
