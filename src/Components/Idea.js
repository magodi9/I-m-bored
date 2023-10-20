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
      "Build a fort",
      "Sing along to some Disney songs",
      "Write a letter",
    ].map((i) => {
      return {
        name: i,
        inspo: `https://www.pinterest.es/search/pins/?q=${i}&rs=typed`,
      };
    })
  );
  console.log();

  return (
    <View
      style={{
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        top: "-121px",
      }}
    >
      <Text
        style={{
          fontFamily: "Cardo-Italic",
          color: "rgb(204 132 34)",
          fontSize: "17px",
        }}
      >
        {ideas[props.index].name}
      </Text>
      <A
        style={{
          fontFamily: "Cardo-Italic",
          fontSize: "17px",
          textDecoration: "underline",
        }}
        href={ideas[props.index].inspo}
      >
        Inspo
      </A>
    </View>
  );
}
