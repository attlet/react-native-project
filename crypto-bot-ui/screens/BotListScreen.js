import React, { useEffect, useRef } from "react";
import { StyleSheet, View } from "react-native";
import TotalValue from "../components/bot_list/TotalValue";
import BotList from "../components/bot_list/BotList";
import FloatingWriteButton from "../components/FloatingWriteButton";
import { BotContextProvider } from "../contexts/BotContext";
import BotListHeader from "../components/bot_list/BotListHeader";
import { SafeAreaView } from "react-native-safe-area-context";

function BotListScreen() {

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.container}>
        {/* <BotContextProvider> */}
        <BotListHeader />
        <TotalValue />
        <BotList />
        <FloatingWriteButton right={90} bottom={16} icon="delete-off" />
        <FloatingWriteButton right={16} bottom={16} icon="plus" />
        {/* </BotContextProvider> */}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {
    flex: 1,
  }
});

export default BotListScreen;
