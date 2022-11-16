import React, { useContext } from "react";
import { View, StyleSheet, Alert } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import WriteContext from "../contexts/WriteContext";
import api_axios from "../api/client";
import BotContext from "../contexts/BotContext";

function WriteHeader() {
  const navigation = useNavigation();
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
  const { BotData, AddBotData } = useContext(BotContext);

  const onPress_submit = () => {
    // const getData = async () => {
    //   try {
    //     const response = await api_axios.post("/addBot/", {
    //       bot: BotData,
    //     });
    //     AddBotData({
    //       name,
    //       amount,
    //       stoploss,
    //       pnl: 0,
    //       roe: 0,
    //       method,
    //       status: "stop",
    //     });
    //     console.log("submit success: ", response.data);
    //     navigation.pop();
    //   } catch (error) {
    //     if (error.response) {
    //       console.log(error.response.data);
    //       console.log(error.response.status);
    //       console.log(error.response.headers);
    //     } else if (error.request) {
    //       console.log(error.request);
    //     } else {
    //       console.log("error : ", error.message);
    //     }
    //     console.log(error.config);
    //     Alert.alert(
    //       "",
    //       "데이터 전송 실패",
    //       [
    //         {
    //           text: "닫기",
    //           onPress: () => console.log("submit 데이터 전송 실패 닫기 실행"),
    //           style: "cancel",
    //         },
    //       ],
    //       { cancelable: false }
    //     );
    //   }
    // };
    // getData();
    AddBotData({
            name,
            pnl: 0,
            roe: 0,
            status: "stop",
          });
    console.log("add bot");
  };

  const onPress_back = () => {
    navigation.pop();
  };

  const onPress_add = () => {
    if (name.length < 2) {
      Alert.alert(
        "",
        "이름은 두 글자 이상이여야 합니다.",
        [
          {
            text: "닫기",
            onPress: () => console.log("submit 닫기 실행"),
            style: "cancel",
          },
        ],
        { cancelable: false }
      );
    }
    // } else if (amount.length < 1 || isNaN(amount) == true) {
    //   Alert.alert(
    //     "",
    //     "숫자를 한 글자 이상 입력해야 합니다.",
    //     [
    //       {
    //         text: "닫기",
    //         onPress: () => console.log("submit 닫기 실행2"),
    //         style: "cancel",
    //       },
    //     ],
    //     { cancelable: false }
    //   );
    // } 
    else {
      onPress_submit();
    }
  };

  return (
    <View style={styles.block}>
      <View>
        <AntDesign
          name="arrowleft"
          size={24}
          color="#FE642E"
          onPress={onPress_back}
        />
      </View>
      <View style={styles.rightButton}>
        <AntDesign
          name="check"
          size={24}
          color="#FE642E"
          onPress={onPress_add}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    height: 48,
    paddingHorizontal: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth : 0.5,
    borderBottomColor : 'gray'
  },
  rightButton: {
    flexDirection: "row",
    marginHorizontal: 8,
  },
});

export default WriteHeader;
