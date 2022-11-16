import React from "react";
import { KeyboardAvoidingView, Platform, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import WriteComponent from "../components/WriteComponent";
import WriteHeader from "../components/WriteHeader";
import { BotContextProvider } from "../contexts/BotContext";
import { WriteContextProvider } from "../contexts/WriteContext";

function AddBotScreen({ route }) {
  console.log(route.params.data);
  return (
    <SafeAreaView style={styles.root}>
      {/* <BotContextProvider> */}

      <KeyboardAvoidingView
        style={styles.avoid}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <WriteHeader />
        <WriteComponent />
      </KeyboardAvoidingView>

      {/* </BotContextProvider> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "white",
  },
  avoid: {
    flex: 1,
  },
});

export default AddBotScreen;
