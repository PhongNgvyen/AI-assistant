import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AssistantScreen from "./src/screens/AssistantScreen";
import HistoryScreen from "./src/screens/HistoryScreen";
import NotesScreen from "./src/screens/NotesScreen";

export type RootStackParamList = {
  Assistant: undefined;
  History: undefined;
  Notes: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Assistant"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#0a0a0a",
          },
          headerTintColor: "#ffffff",
          headerTitleStyle: {
            fontWeight: "600",
          },
          contentStyle: {
            backgroundColor: "#000000",
          },
        }}
      >
        <Stack.Screen
          name="Assistant"
          component={AssistantScreen}
          options={{
            title: "JARVIS",
          }}
        />

        <Stack.Screen
          name="History"
          component={HistoryScreen}
          options={{
            title: "History",
          }}
        />

        <Stack.Screen
          name="Notes"
          component={NotesScreen}
          options={{
            title: "Notes",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}