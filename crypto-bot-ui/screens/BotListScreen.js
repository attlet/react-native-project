import React from "react";
import { StyleSheet, View } from "react-native";
import TotalValue from "../components/bot_list/TotalValue";
import BotList from "../components/bot_list/BotList";
import FloatingWriteButton from "../components/FloatingWriteButton";
import { BotContextProvider } from "../contexts/BotContext";


function BotListScreen() {
  return (
    <View style={styles.root}>
      <BotContextProvider>
        <TotalValue />
        <BotList />
        {/* <FloatingWriteButton right={80} bottom={16} icon="delete-off"/> */}
        <FloatingWriteButton right={16} bottom={16} icon="plus"/>
      </BotContextProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export default BotListScreen;
