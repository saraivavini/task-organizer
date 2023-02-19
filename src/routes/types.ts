import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthStackParamsList } from './auth.routes';
import { MainStackParamsList } from './main.routes';

export type RootStackParamList = AuthStackParamsList & MainStackParamsList;

type G = keyof RootStackParamList;
export type TNavigationProps<T extends G> = NativeStackNavigationProp<
  RootStackParamList,
  T
>;
type TRouteProps<T extends G> = RouteProp<RootStackParamList, T>;

export const useAppNavigation = <T extends G>() =>
  useNavigation<TNavigationProps<T>>();
export const useAppRoute = <T extends G>() => useRoute<TRouteProps<T>>();
