import React, { useContext } from "react";
import { View, StyleSheet, Pressable, Text, Platform } from "react-native";
import WriteContext from "../../contexts/WriteContext";

function KeyboardComponent({ title, isCal_view, setIsCal, Changer }) {
  const { method, setMethod } = useContext(WriteContext);

  const onPress_change = () => {
    console.log(isCal_view);
    const temp = !isCal_view;
    setIsCal(temp);
  };

  return (
    <View style={styles.block}>
      {Changer ? (
        <Pressable
          onPress={onPress_change}
          style={({ pressed }) => [
            styles.wrapper,
            Platform.OS === "ios" && pressed && { opacity: 0.5 },
          ]}
          android_ripple={{ color: "white" }}
        >
          <Text style={styles.text}>{title}</Text>
        </Pressable>
      ) : (
        <Pressable
          onPress={() => {
            setMethod(method + title);
          }}
          style={({ pressed }) => [
            styles.wrapper,
            Platform.OS === "ios" && pressed && { opacity: 0.5 },
          ]}
          android_ripple={{ color: "white" }}
        >
          <Text style={styles.text}>{title}</Text>
        </Pressable>
      )}
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
    backgroundColor: "#c0c0c0",
    paddingHorizontal: 15,
  },
  text: {
    color: "black",
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default KeyboardComponent;
