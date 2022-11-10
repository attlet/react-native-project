import React, { useContext, useEffect } from "react";
import { Alert, Platform, Pressable, StyleSheet, View } from "react-native";
// import Icon from 'react-native-vector-icons/MaterialIcons';
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import BotContext from "../contexts/BotContext";

function FloatingRunButton({ Id, right, bottom, icon }) {
  const navigation = useNavigation();
  const {
    checked,
    setChecked,
    BotData,
    setBotData,
    AddBotData,
    DeleteBotData,
    DeleteChecked_func,
  } = useContext(BotContext);

  //   useEffect(() => {
  //     console.log(checked);
  //   }, [checked]);

  //   useEffect(() => {
  //     console.log(BotData);
  //   }, [BotData]);

  //const temp_data = BotData.find(isTrueId);
  const isTrueId = (data) => {
    if (data.id === Id) {
      return true;
    }
  };

  const One_BotData = BotData.find(isTrueId);



  const setStatus_run = () => {
    const temp = BotData.map((data) =>
      data.id === Id ? { ...data, status: "running"} : data
     );

    setBotData(temp);
  };

  const setStatus_stop = () => {
    const temp = BotData.map((data) => 
      data.id === Id ? { ...data, status: "stop" } : data
    );
    setBotData(temp);
  };

  const onPress_start = () => {
    Alert.alert(
      "거래를 시작하겠습니까?",
      "",
      [
        { text: "cancel", style: "cancel" },
        {
          text: "start",
          onPress: () => {
            setStatus_run();
          },
          style: "destructive",
        },
      ],
      {
        cancelable: true,
      }
    );
  };

  const onPress_stop = () => {
    const cur_icon = "stop";

    Alert.alert(
      "거래를 중지하겠습니까?",
      "",
      [
        { text: "cancel", style: "cancel" },
        {
          text: "stop",
          onPress: () => {
            setStatus_stop();
          },
          style: "destructive",
        },
      ],
      {
        cancelable: true,
      }
    );
  };

  return (
    <View style={[styles.wrapper, (bottom = { bottom }), (right = { right })]}>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          Platform.OS === "ios" && {
            opacity: pressed ? 0.6 : 1,
          },
        ]}
        android_ripple={{ color: "white" }}
        onPress={icon === "running" ? onPress_stop : onPress_start}
      >
        {icon === "running" ? (
          <FontAwesome name="stop" size={24} color="black" />
        ) : (
          <FontAwesome name="play" size={24} color="black" />
        )}
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    // bottom: {bottom},
    // right: {right},
    width: 56,
    height: 56,
    borderRadius: 28,
    shadowColor: "#4d4d4d",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    overflow: Platform.select({ android: "hidden" }),
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "tomato",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    color: "white",
  },
});

export default FloatingRunButton;
