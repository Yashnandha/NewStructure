import { NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
export type RootStackParams = {
  login: undefined;
  drawer: NavigatorScreenParams<DrawerParamList>;
};

export type DrawerParamList = {
  bottomStack: undefined
};


type RootNavigationProps = NativeStackNavigationProp<RootStackParams>;

