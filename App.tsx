import { StyleSheet, Text, View } from "react-native";
// import NavugationContainer and StackNavigtator
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "./screens/HomeScreen";
// import useFonts from expo-font
import {
  useFonts,
  Lato_300Light,
  Lato_400Regular,
  Lato_700Bold,
} from "@expo-google-fonts/lato";
import DummyScreen from "./screens/DummyScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  const [loaded] = useFonts({
    "lato-300": Lato_300Light,
    "lato-400": Lato_400Regular,
    "lato-700": Lato_700Bold,
  });

  if (!loaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false, statusBarStyle: "dark" }}
        initialRouteName="Dummy"
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Dummy" component={DummyScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
