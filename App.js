import { View, ImageBackground } from "react-native-web";
import Home from "./src/Screens/Home";
import Todo from "./src/Screens/Todo";

export default function App() {
  const image = require("/home/mayigd2/im-bored/assets/background.png");
  return (
    <ImageBackground
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
      resizeMode="cover"
      source={image}
    >
      <Home
        style={{
          flex: 1,
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
        }}
      ></Home>
    </ImageBackground>
  );
}
