import {
  Image,
  StyleSheet,
  Platform,
  View,
  Text,
  FlatList,
  TextInput,
  Button,
} from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import React, { useState } from "react";
import { FancyPersonRow } from "../FancyPersonRow";

export default function HomeScreen() {
  const [people, setPeople] = useState([
    {
      firstName: "Arne",
      lastName: "Arnesson",
    },
    {
      firstName: "Bengt",
      lastName: "Bengtsson",
    },
    {
      firstName: "Cecilia",
      lastName: "Ceciliasson",
    },
    {
      firstName: "Michel",
      lastName: "Kowalsk",
    },
  ]);

  const [inputFirstName, setInputFirstName] = useState("");
  const [inputLastName, setInputLastName] = useState("");

  function addPerson() {
    setPeople([
      ...people,
      { firstName: inputFirstName, lastName: inputLastName },
    ]);

    setInputFirstName("");
    setInputLastName("");
  }

  return (
    <View style={{ backgroundColor: "blue", flex: 1 }}>
      <View style={{ backgroundColor: "red", height: 100 }}></View>

      <Text style={niceStyle.nicetext}>Type your name:</Text>

      <TextInput
        onChangeText={setInputFirstName}
        value={inputFirstName}
        style={{
          backgroundColor: "white",
          height: 50,
          borderRadius: 10,
        }}
      />

      <TextInput
        onChangeText={setInputLastName}
        value={inputLastName}
        style={{ backgroundColor: "white", height: 50, borderRadius: 10 }}
      />

      <Button title="Add" onPress={addPerson} />

      <FlatList
        data={people}
        renderItem={({ item }) => (
          <FancyPersonRow firstName={item.firstName} lastName={item.lastName} />
        )}
      />
    </View>
  );
}

export const niceStyle = StyleSheet.create({
  nicetext: {
    fontSize: 25,
    color: "black",
  },
});

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
