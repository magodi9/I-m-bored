import React, { useEffect, useState } from "react";
import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import Idea from "../Components/Idea";
import { Audio } from "expo-av";
import { useFonts } from "expo-font";

export default function Home() {
  const ballon = require("/home/mayigd2/im-bored/assets/ballon.png");
  const cloud = require("/home/mayigd2/im-bored/assets/cloud.png");
  const [fontLoaded] = useFonts({
    "Cardo-Italic": require("/home/mayigd2/im-bored/assets/fonts/Cardo-Italic.ttf"),
  });
  const [sound, setSound] = useState();
  const [name, setName] = useState("Maria");
  const [showIdea, setShowIdea] = useState(false);
  useEffect(() => {
    async function loadSound() {
      console.log("Loading Sound");
      const { sound } = await Audio.Sound.createAsync(
        require("/home/mayigd2/im-bored/assets/GloboExplotando.mp3")
      );
      setSound(sound);
    }
    loadSound();
  }, []);

  async function playSound() {
    console.log("Playing Sound");
    await sound.playAsync();
  }
  return (
    <View>
      {/* <Text>Hi {name}</Text> */}
      {showIdea ? (
        <View>
          <Image source={cloud} style={styles.cloud} />
          <Idea index={Math.floor(Math.random() * 12)}></Idea>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              position: "relative",
              top: "-106px",
              width: "100%",
            }}
          >
            <Pressable onPress={() => setShowIdea(false)}>
              <Text style={styles.buttonText}>Go back </Text>
            </Pressable>
            <Pressable onPress={() => console.log("Later")}>
              <Text style={styles.buttonText}>Do it later</Text>
            </Pressable>
          </View>
        </View>
      ) : (
        <Pressable
          style={styles.button}
          onPress={() => {
            playSound();
            setShowIdea(true);
          }}
        >
          <Image source={ballon} style={styles.ballon} />
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  ballon: {
    width: 400,
    height: 500,
  },
  button: {
    position: "relative",
    bottom: "-7px",
    zIndex: "1",
    alignItems: "center",
    justifyContent: "center",
  },
  cloud: {
    position: "relative",
    top: "20x",
    right: "-7px",
    height: "200px",
    width: "380px",
  },
  buttonText: {
    color: "black",
    fontFamily: "Cardo-Italic",
    fontSize: "17px",
  },
});
