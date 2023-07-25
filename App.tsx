import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import { ListScreen } from './ListScreen';

const Stack = createStackNavigator();
export function NavigationStack() {
  return <Stack.Navigator>
    <Stack.Screen name="List" component={ListScreen} />
  </Stack.Navigator>
}

export default function App() {
  return <NavigationContainer><NavigationStack />
  <StatusBar style="auto" /></NavigationContainer>
}
