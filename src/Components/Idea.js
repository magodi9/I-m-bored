import { A } from "@expo/html-elements";
import { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native-web";

export default function Idea(props) {
  const [ideas, setIdeas] = useState(
    [
      "Play an instrument",
      "Write a short story",
      "Crochet",
      "Draw something",
      "Try origami",
      "Practica Flauta",
      "Hornea Galletas",
      "Make a collage",
      "Play a board game",
      "Build a fort.",
      "Sing along to some Disney songs",
      "Write a letter.",
    ].map((i) => {
      return {
        name: i,
        inspo: `https://www.pinterest.es/search/pins/?q=${i}&rs=typed`,
      };
    })
  );
  console.log();

  return (
    <View style={styles.idea}>
      <Text style={styles.text}>{ideas[props.index].name}</Text>
      <A style={styles.link} href={ideas[props.index].inspo}>
        Inspo
      </A>
    </View>
  );
}
const styles = StyleSheet.create({
  idea: {
    justifyContent: "center",
    alingItems: "center",
  },
  text: {
    fontFamily: "cursive",
  },
  link: {
    justifyContent: "center",
    alingItems: "center",
    color: "blue",
  },
});
