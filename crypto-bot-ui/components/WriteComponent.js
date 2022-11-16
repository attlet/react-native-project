import React, { useState, useRef, useContext } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Keyboard,
  Pressable,
  Alert
} from "react-native";
import api_axios from "../api/client";
import KeyboardView from "./keyboard/KeyboardView";
import WriteContext from "../contexts/WriteContext";

function WriteComponent() {
  
  const name_ref = useRef();
  const amount_ref = useRef();
  const method_ref = useRef();
  const stoploss_ref = useRef();

  const { name, amount, method, stoploss, setName, setAmount, setMethod, setStoploss} = useContext(WriteContext);

  const onPress_submit = () => {
    if (name.length < 2) {
      Alert.alert(
        "",
        "이름은 두 글자 이상이여야 합니다.",
        [
          {
            text: "닫기",
            onPress: () => console.log("submit 닫기 실행"),
            style : 'cancel'
          }
        ],
        {cancelable: false}
      )
    }
    else if(amount.length < 1 || isNaN(amount) == true){
      Alert.alert(
        "",
        "숫자를 한 글자 이상 입력해야 합니다.",
        [
          {
            text: "닫기",
            onPress: () => console.log("submit 닫기 실행2"),
            style : 'cancel'
          }
        ],
        {cancelable: false}
      )
    }
    else{
      const getData = async () => {
        try {
          const response = await api_axios.post("/addBot/", {
            name: name,
            amount: amount,
            stragies: method,
          });
          console.log("submit success: ", response.data);
        } catch (error){ 
          console.log("submit error:", error);
          console.log("error data:", error.response);
        }
      };
      getData();
    }
  };

  const setFunction = (e) => {
    setMethod(e);
  };

  return (
    <View style={styles.block}>
      <TextInput
        placeholder="bot name"
        style={styles.nameInput}
        onChangeText={(name) => {
          setName(name);
        }}
        value={name}
        ref={name_ref}
        onSubmitEditing={() => {
          amount_ref.current.focus();
        }}
      />
      <TextInput
        placeholder="amount to trading"
        style={styles.amountInput}
        onChangeText={(amount) => {
          setAmount(amount);
        }}
        value={amount}
        ref={amount_ref}
        onSubmitEditing={() => {
          stoploss_ref.current.focus();
        }}
      />
      <TextInput
        placeholder="stoploss"
        style={styles.amountInput}
        onChangeText={(loss) => {
          setStoploss(loss);
        }}
        value={stoploss}
        ref={stoploss_ref}
        onSubmitEditing={() => {
          method_ref.current.focus();
        }}
      />
      <TextInput
        placeholder="you can write here your stragies using these keywords"
        style={styles.methodInput}
        onChangeText={(method) => {
          setMethod(method);
        }}
        value={method}
        ref={method_ref}
        multiline
        textAlignVertical="top"
        onSubmitEditing={onPress_submit}
      />
      <KeyboardView />
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    padding: 16,
  },
  nameInput: {
    paddingVertical: 0,
    fontSize: 18,
    marginBottom: 25,
    fontWeight: "bold",
    borderBottomWidth: 1,
    borderBottomColor: "gray",
  },
  amountInput: {
    fontSize: 16,
    paddingVertical: 2,
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
  },
  methodInput: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 10,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "tomato",
    justifyContent: "center",
    alignItems: "center",
  },
});
export default WriteComponent;
