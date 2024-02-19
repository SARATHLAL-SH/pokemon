import { StyleSheet, SafeAreaView, Platform, ScrollView } from "react-native";
import PokemonCard from "./components/PokemonCard";

export default function App() {
  const charmanderData = {
    name: "charmandar",
    image: require("./assets/sylveon2.jpg"),
    type: "fire",
    hp: 39,
    moves: ["Scratch", "Ember", "Growl", "Leer"],
    weakness: ["water", "Rock"],
  };
  const squirtleData = {
    name: "Squirtle",
    image: require("./assets/fakemon.jpg"),
    type: "water",
    hp: 44,
    moves: ["Tackle", "Water gun", "Tail whip", "Withdraw"],
    weakness: ["Electric", "Grass"],
  };
  const balbasourData = {
    name: "Balbasour",
    image: require("./assets/mimikyu.jpg"),
    type: "grass",
    hp: 45,
    moves: ["Tackle", "Vine Whip", "Growl", "Leech Seed"],
    weakness: ["Fire", "Ice", "Flying", "Psychic"],
  };
  const PickachuData = {
    name: "Pickachu",
    image: require("./assets/pikachu.jpg"),
    type: "electric",
    hp: 35,
    moves: ["Quick Attack", "ThunderBolt", "Tail Whip", "Growl"],
    weakness: ["Ground"],
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <PokemonCard {...charmanderData} />
        <PokemonCard {...squirtleData} />
        <PokemonCard {...PickachuData} />
        <PokemonCard {...balbasourData} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: Platform.OS === "android" ? 45 : 0,
  },
});
