import React from "react";
import MenuHome from "./components/MenuHome";
import MenuSelection from "./components/MenuSelection";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

const App = () => (
  <SafeAreaProvider>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MenuHome"
          component={MenuHome}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MenuSelection"
          component={MenuSelection}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  </SafeAreaProvider>
);
export default App;
