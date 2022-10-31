import React from "react";
import { View, StyleSheet, Pressable, Text, Platform } from "react-native";

function KeyboardComponent({title, method, setMethod}) {
  console.log(setMethod);

  return (
    <View style={styles.block}>
      <Pressable
        onPress={() => setMethod(method + title)}
        style={({ pressed }) => [
          styles.wrapper,
          Platform.OS === "ios" && pressed && { opacity: 0.5 },
        ]}
        android_ripple={{ color: "white" }}
        >
        <Text style={styles.text}>{title}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    borderRadius: 4,
    overflow: "hidden",
    margin: 15,
  },
  wrapper: {
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    borderRadius: 4,
    backgroundColor: '#c0c0c0'
  },
  text: {
    color: 'white',
    fontSize: 14,
    fontWeight : 'bold',
  }
});

export default KeyboardComponent;
