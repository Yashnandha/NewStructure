import { DrawerNavigationProp } from '@react-navigation/drawer';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {
  DrawerParamList,
  RootStackParams,
} from '../navigation/stacks/rootStackParams';

export const useAuthNavigation = <
  T extends keyof RootStackParams = keyof RootStackParams,
>(
  values?: T,
): NativeStackNavigationProp<RootStackParams, T> => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams, T>>();
  return navigation;
};

export const useAuthRoute = <
  T extends keyof RootStackParams = keyof RootStackParams,
>(
  values?: T,
): RouteProp<RootStackParams, T> => {
  const route = useRoute<RouteProp<RootStackParams, T>>();
  return route;
};

export const useDrawerNavigation = <
  T extends keyof DrawerParamList = keyof DrawerParamList,
>(
  screen?: T,
): DrawerNavigationProp<DrawerParamList, T> => {
  const navigation = useNavigation<DrawerNavigationProp<DrawerParamList, T>>();
  return navigation;
};
