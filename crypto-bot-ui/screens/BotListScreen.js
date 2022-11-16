import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import TotalValue from "../components/bot_list/TotalValue";
import BotList from "../components/bot_list/BotList";
import FloatingWriteButton from "../components/FloatingWriteButton";
import { BotContextProvider } from "../contexts/BotContext";
import BotListHeader from "../components/bot_list/BotListHeader";
import { SafeAreaView } from "react-native-safe-area-context";
import InputModal from "../components/InputModal";

function BotListScreen({ navigation }) {
  

  return (
    <SafeAreaView style={styles.root}>
      {/* <BotContextProvider> */}
      <BotListHeader/>
      <TotalValue/>
      <BotList />
      <FloatingWriteButton right={90} bottom={16} icon="delete-off" />
      <FloatingWriteButton right={16} bottom={16} icon="plus" />

      {/* </BotContextProvider> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export default BotListScreen;
