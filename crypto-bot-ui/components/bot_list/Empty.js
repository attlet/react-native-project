import React from "react";
import { View, StyleSheet, Text } from "react-native";

function Empty() {
  return (
    <View style={styles.block}>
      <Text style={styles.text1}>There is no Bot.</Text>
      <Text style={styles.text2}>Click the + button to add a bot.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text1: {
    color: "#9e9e9e",
    fontSize: 30,
    fontWeight: "bold",
  },
  text2: {
    color: "#9e9e9e",
    fontSize: 24,
  },
});

export default Empty;
