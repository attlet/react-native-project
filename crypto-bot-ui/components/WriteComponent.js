import React, { useState, useRef, useContext } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Keyboard,
  Alert,
} from "react-native";
import api_axios from "../api/client";
import KeyboardView from "./keyboard/KeyboardView";
import WriteContext from "../contexts/WriteContext";
import Checkbox from "expo-checkbox";
import { FlatList, ScrollView } from "react-native-gesture-handler";

function WriteComponent() {
  const name_ref = useRef();
  const amount_ref = useRef();
  const method_ref = useRef();
  const buystoploss_ref = useRef();
  const sellstoploss_ref = useRef();

  const {
    name,
    amount,
    isLong,
    isShort,
    method,
    test1,
    test2,
    test3,
    BuyStoploss,
    SellStoploss,
    setName,
    setAmount,
    setMethod,
    setTest1,
    setTest2,
    setTest3,
    setLong,
    setShort,
    setBuyStoploss,
    setSellStoploss,
  } = useContext(WriteContext);

  const [botCheck, setBotcheck] = useState([]); //알려주는 걸 넣는 곳.

  // const onPress_submit = () => {
  //   if (name.length < 2) {
  //     Alert.alert(
  //       "",
  //       "이름은 두 글자 이상이여야 합니다.",
  //       [
  //         {
  //           text: "닫기",
  //           onPress: () => console.log("submit 닫기 실행"),
  //           style: "cancel",
  //         },
  //       ],
  //       { cancelable: false }
  //     );
  //   } else if (amount.length < 1 || isNaN(amount) == true) {
  //     Alert.alert(
  //       "",
  //       "숫자를 한 글자 이상 입력해야 합니다.",
  //       [
  //         {
  //           text: "닫기",
  //           onPress: () => console.log("submit 닫기 실행2"),
  //           style: "cancel",
  //         },
  //       ],
  //       { cancelable: false }
  //     );
  //   } else {
  //     const getData = async () => {
  //       try {
  //         const response = await api_axios.post("/addBot/", {
  //           name: name,
  //           amount: amount,
  //           stragies: method,
  //         });
  //         console.log("submit success: ", response.data);
  //       } catch (error) {
  //         console.log("submit error:", error);
  //         console.log("error data:", error.response);
  //       }
  //     };
  //     getData();
  //   }
  // };

  const setFunction = (e) => {
    setMethod(e);
  };

  return (
    <ScrollView>
      <View style={styles.block}>
        <View style={styles.inputWrapper}>
          <Text style={styles.inputTitle}>bot name : </Text>
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
        </View>

        {/* <View style={styles.inputWrapper}>
          <Text style={styles.inputTitle}>Amount : </Text>
          <TextInput
            placeholder="amount to trading"
            style={styles.amountInput}
            onChangeText={(amount) => {
              setAmount(amount);
            }}
            value={amount}
            ref={amount_ref}
            onSubmitEditing={() => {
              buystoploss_ref.current.focus();
            }}
          />
        </View> */}

        <View style={styles.inputWrapper}>
          <Text style={styles.lossTitle}>buy stop : </Text>
          <TextInput
            placeholder="0.0"
            style={styles.lossInput}
            onChangeText={(loss) => {
              setBuyStoploss(loss);
            }}
            value={BuyStoploss}
            ref={buystoploss_ref}
            onSubmitEditing={() => {
              sellstoploss_ref.current.focus();
            }}
          />
          <Text style={styles.lossTitle}>sell stop : </Text>
          <TextInput
            placeholder="0.0"
            style={styles.lossInput}
            onChangeText={(loss) => {
              setSellStoploss(loss);
            }}
            value={SellStoploss}
            ref={sellstoploss_ref}
            onSubmitEditing={() => {
              method_ref.current.focus();
            }}
          />
        </View>

        <View style={styles.inputWrapper}>
          <Text style={styles.orderTitle}>Set Order : </Text>
          <View style={styles.orderCheck}>
            <Checkbox
              // style={styles.checkbox}
              value={isLong}
              onValueChange={setLong}
              color={isLong ? "tomato" : undefined}
            />
            <Text style={styles.orderText}>long</Text>
          </View>

          <View style={styles.orderCheck}>
            <Checkbox
              // style={styles.checkbox}
              value={isShort}
              onValueChange={setShort}
              color={isShort ? "tomato" : undefined}
            />
            <Text style={styles.orderText}>short</Text>
          </View>
        </View>

        <View style={styles.inputWrapper}>
          <Text style={styles.botSignalTitle}>bot signal : </Text>
          <View style={styles.botSignalRight}>
            <View style={styles.botSignalcheck}>
              <Checkbox
                value={test1}
                onValueChange={setTest1}
                color={test1 ? "tomato" : undefined}
              />
              <Text style={styles.botSignalText}>test1</Text>
            </View>

            <View style={styles.botSignalcheck}>
              <Checkbox
                value={test2}
                onValueChange={setTest2}
                color={test2 ? "tomato" : undefined}
              />
              <Text style={styles.botSignalText}>test2</Text>
            </View>

            <View style={styles.botSignalcheck}>
              <Checkbox
                value={test3}
                onValueChange={setTest3}
                color={test3 ? "tomato" : undefined}
              />
              <Text style={styles.botSignalText}>test3</Text>
            </View>

            <View style={styles.botSignalcheck}>
              <Checkbox
                value={test3}
                onValueChange={setTest3}
                color={test3 ? "tomato" : undefined}
              />
              <Text style={styles.botSignalText}>test3</Text>
            </View>

            <View style={styles.botSignalcheck}>
              <Checkbox
                value={test3}
                onValueChange={setTest3}
                color={test3 ? "tomato" : undefined}
              />
              <Text style={styles.botSignalText}>test3</Text>
            </View>

            <View style={styles.botSignalcheck}>
              <Checkbox
                value={test3}
                onValueChange={setTest3}
                color={test3 ? "tomato" : undefined}
              />
              <Text style={styles.botSignalText}>test3</Text>
            </View>

            <View style={styles.botSignalcheck}>
              <Checkbox
                value={test3}
                onValueChange={setTest3}
                color={test3 ? "tomato" : undefined}
              />
              <Text style={styles.botSignalText}>test3</Text>
            </View>

            <View style={styles.botSignalcheck}>
              <Checkbox
                value={test3}
                onValueChange={setTest3}
                color={test3 ? "tomato" : undefined}
              />
              <Text style={styles.botSignalText}>test3</Text>
            </View>
          </View>
        </View>

        {/* <TextInput
        placeholder="you can write here your stragies using these keywords"
        style={styles.botSignalcheck}
        onChangeText={(method) => {
          setMethod(method);
        }}
        value={method}
        ref={method_ref}
        multiline
        textAlignVertical="top"
        onSubmitEditing={onPress_submit}
      /> */}

        {/* <KeyboardView /> */}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    padding: 16,
  },
  inputWrapper: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 25,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    justifyContent: "space-around",
  },
  inputTitle: {
    flex: 1,
  },
  nameInput: {
    flex: 1,
    paddingVertical: 0,
    paddingLeft: 4,
    fontSize: 16,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "gray",
  },

  orderTitle: {
    flex: 1,
  },
  orderText: {
    fontSize: 16,
    marginHorizontal: 10,
  },
  orderCheck: {
    flex: 1,
    flexDirection: "row",
  },
  amountInput: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 2,
    paddingLeft: 4,
    borderRadius: 4,
    borderColor: "gray",
    borderWidth: 1,
  },

  lossTitle: {
    flex: 1,
  },
  lossInput: {
    flex: 1,
    fontSize: 14,
    marginRight: 20,
    paddingLeft: 4,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "gray",
  },

  botSignalTitle: {
    flex: 1,
  },
  botSignalRight: {
    flex: 1,
    flexWrap: "wrap",
  },
  botSignalcheck: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 10,
    flexDirection: "row",
  },
  botSignalText: {
    fontSize: 16,
    marginHorizontal: 10,
  },

  // button: {
  //   width: 56,
  //   height: 56,
  //   borderRadius: 28,
  //   backgroundColor: "tomato",
  //   justifyContent: "center",
  //   alignItems: "center",
  // },
});
export default WriteComponent;
