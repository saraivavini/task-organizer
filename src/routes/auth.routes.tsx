import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import { SignInScreen } from '../features/auth/signIn/SignIn.screen';
import { SignUpScreen } from '../features/auth/signUp';

export type AuthStackParamsList = {
  signIn: undefined;
  signUp: undefined;
};

export type AuthNavigatorRouteProps =
  NativeStackNavigationProp<AuthStackParamsList>;

const { Navigator, Screen } = createNativeStackNavigator<AuthStackParamsList>();

export function AuthRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="signIn" component={SignInScreen} />
      <Screen name="signUp" component={SignUpScreen} />
    </Navigator>
  );
}
