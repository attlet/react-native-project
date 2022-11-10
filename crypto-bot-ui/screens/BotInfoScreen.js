import React from "react";
import { StyleSheet, View } from "react-native";
import BotHistoryTab from "../components/bot_info/BotHistoryTab";
import BotValue from "../components/bot_info/BotValue";
import FloatingRunButton from "../components/FloatingRunButton";
import { BotContextProvider } from "../contexts/BotContext";

function BotInfoScreen({route}) {
  return (
    <View style={styles.root}>
      {/* <BotContextProvider> */}
        <BotValue Id={route.params.id}/>
        <BotHistoryTab />
        <FloatingRunButton Id={route.params.id} right={16} bottom={16} icon={route.params.status} />
      {/* </BotContextProvider> */}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export default BotInfoScreen;
