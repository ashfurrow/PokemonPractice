import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";
import { ListScreen } from "./Screens/ListScreen/ListScreen";
import { RootStackParamList } from "./navigation";
import { DetailScreen } from "./Screens/DetailScreen/DetailScreen";

const Stack = createStackNavigator<RootStackParamList>();
export function NavigationStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="List" component={ListScreen} />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={({ route }) => ({ title: route.params.name })}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <NavigationStack />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
