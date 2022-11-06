import React, { useContext } from "react";
import { View, StyleSheet, Alert } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import WriteContext from "../contexts/WriteContext";
import api_axios from "../api/client";

function WriteHeader({ onAdd }) {
  const navigation = useNavigation();
  const { name, amount, method } = useContext(WriteContext);

  const onPress_submit = () => {
    const getData = async () => {
      try {
        const response = await api_axios.post("/addBot/", {
          name: name,
          amount: amount,
          stragies: method,
        });
        console.log("submit success: ", response.data);
      } catch (error) {
        console.log("submit error:", error);
        console.log("error data:", error.response);
      }
    };
    getData();
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
    } else if (amount.length < 1 || isNaN(amount) == true) {
      Alert.alert(
        "",
        "숫자를 한 글자 이상 입력해야 합니다.",
        [
          {
            text: "닫기",
            onPress: () => console.log("submit 닫기 실행2"),
            style: "cancel",
          },
        ],
        { cancelable: false }
      );
    } else {
      onPress_submit();
      onAdd({
        name,
        type: "addType",
        amount,
        pnl: "100",
        roe: "15",
        method,
      });
      navigation.pop();
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
  },
  rightButton: {
    flexDirection: "row",
    marginHorizontal: 8,
  },
});

export default WriteHeader;
