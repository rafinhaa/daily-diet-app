import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NewAccount, SignIn } from "@screens";

const { Navigator, Screen } = createNativeStackNavigator();

export type SignInRoutesParamList = {
  SignIn: undefined;
  NewAccount: undefined;
};

export function SignInRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="SignIn" component={SignIn} />
      <Screen name="NewAccount" component={NewAccount} />
    </Navigator>
  );
}
