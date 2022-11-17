import React, { useContext, useEffect } from "react";
import {
  View,
  StyleSheet,
  Modal,
  Text,
  TextInput,
  KeyboardAvoidingView,
  useWindowDimensions,
} from "react-native";
import WriteContext from "../contexts/WriteContext";
import api_axios from "../api/client";
import BotContext from "../contexts/BotContext";

function InputModal({ visibleState, setvisible, Id }) {
  const { amount, setAmount } = useContext(WriteContext);

  const {
    checked,
    setChecked,
    BotData,
    setBotData,
    apiKey,
    secret,
    AddBotData,
    DeleteBotData,
    DeleteChecked_func,
    TradeLog,
    setTradeLog,
  } = useContext(BotContext);

  const { height, width } = useWindowDimensions();

  const onPress = () => {
    //여기에 amount 전송 만들기. id를 활용.
    console.log(visibleState);
    setvisible(false);
  };

  const closeModal = () => {
    setvisible(false);
  };

  return (
    <Modal
      visible={visibleState}
      animationType="fade"
      transparent={true}
      onRequestClose={closeModal}
    >
      <View style={styles.root}>
        <View
          style={[
            styles.Wrapper,
            { width: width * 0.7 },
            { height: height * 0.25 },
          ]}
        >
          <View style={{ paddingBottom: 10 }}>
            <Text
              style={[{ fontWeight: "bold", fontSize: 20, color: "tomato" }]}
            >
              set Amount of trading
            </Text>
          </View>

          <View style={styles.inputWrapper}>
            <Text style={{ fontSize: 16 }}>amount : </Text>
            <TextInput
              placeholder="amount to trading"
              style={styles.input}
              onChangeText={(price) => {
                setAmount(price);
              }}
              value={amount}
              onSubmitEditing={onPress}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 0,
  },
  Wrapper: {
    borderRadius: 5,
    borderColor: "#cccccc",
    borderWidth: 2,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
  },
  inputWrapper: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  input: {
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    padding: 1,
  },
});
export default InputModal;
