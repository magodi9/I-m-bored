import { View, Text, StyleSheet } from "react-native-web";
import Home from "./src/Screens/Home";
import Todo from "./src/Screens/Todo";

export default function App() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Home></Home>
    </View>
  );
}
