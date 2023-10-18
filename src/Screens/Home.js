import React, { useEffect, useState } from "react";
import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import Idea from "../Components/Idea";
import { Audio } from "expo-av";

export default function Home() {
  const ballon = require("/home/mayigd2/im-bored/assets/ballon.png");
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
    <View style={styles.container}>
      <Text>Hi {name}</Text>
      {showIdea ? (
        <View>
          <Idea index={Math.floor(Math.random() * 12)}></Idea>
          <Pressable onPress={() => setShowIdea(false)}>
            <Text style={styles.buttonText}>atras</Text>
          </Pressable>
        </View>
      ) : (
        <View>
          <Pressable
            style={styles.button}
            onPress={() => {
              playSound();
              setShowIdea(true);
            }}
          >
            <Text style={styles.buttonText}>Im Bored</Text>
          </Pressable>

          <Image source={ballon} style={styles.image} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  text: { justifyContent: "center", alingItems: "center" },
  textContainer: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    position: "relative",
    bottom: "-136px",
    zIndex: "1",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: { color: "black" },
  image: {
    width: 300,
    height: 400,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
