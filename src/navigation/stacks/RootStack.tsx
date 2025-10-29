import { RootStackParams } from '@navigation/stacks/rootStackParams';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '@screens/login/Login';

const Stack = createNativeStackNavigator<RootStackParams>();

const RootStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={isLogin ? 'Home' : 'login'}>
      <Stack.Screen name="login" component={Login} />
    </Stack.Navigator>
  );
};

export default RootStack;
