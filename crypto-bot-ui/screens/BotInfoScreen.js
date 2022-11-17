import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import React, { useRef, useEffect, useState } from "react";
import { KeyboardAvoidingView, Modal, StyleSheet, View } from "react-native";
import BotHistoryTab from "../components/bot_info/BotHistoryTab";
import BotValue from "../components/bot_info/BotValue";
import FloatingRunButton from "../components/FloatingRunButton";
import InputModal from "../components/InputModal";
import { BotContextProvider } from "../contexts/BotContext";

function BotInfoScreen({ route }) {
  const [visible, setvisible] = useState(false);
  
  const setvisible_func = (item) => {
    setvisible(item);
  };

  return (
    <View style={styles.root}>
      
        {/* <BotContextProvider> */}
        <InputModal visibleState={visible} setvisible={setvisible_func} Id={route.params.id} />
        <BotValue Id={route.params.id} />
        <BotHistoryTab />
        <FloatingRunButton
          Id={route.params.id}
          right={16}
          bottom={16}
          visible={visible}
          setvisible={setvisible_func}
        />
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
