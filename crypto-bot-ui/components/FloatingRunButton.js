import React, { useContext, useEffect, useState } from "react";
import { Alert, Platform, Pressable, StyleSheet, View } from "react-native";
// import Icon from 'react-native-vector-icons/MaterialIcons';
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import BotContext from "../contexts/BotContext";
import BalanceContext from "../contexts/BalanceContext";
import api_axios from "../api/client";

function FloatingRunButton({ Id, right, bottom }) {
  const navigation = useNavigation();
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

  const { balance, setBalance } = useContext(BalanceContext);
  const [icon, setIcon] = useState(false);
  const [clicked, setClicked] = useState(false);

  const isTrueId = (data) => {
    if (data.id === Id) {
      return true;
    }
  };

  const One_BotData = BotData.find(isTrueId);

  useEffect(() => {
    if (One_BotData.status === "running") {
      setIcon(true);
    }
  }, []);

  const setStatus_run = () => {
    const temp = BotData.map((data) =>
      data.id === Id ? { ...data, status: "running" } : data
    );

    setBotData(temp);
    setIcon(true);
    if (clicked === false) {
      setClicked(true);
      const onPress_trading = async () => {
        try {
          const response = await api_axios.post(
            "/bot_trading",
            {
              api_key: apiKey,
              secret_key: secret,

              // trade_log : TradeLog
            },
            {
              params: {
                status: true,
                standard_balance: balance,
              },
            }
          );
          console.log("trading start", response.data);
        } catch (error) {
          if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else if (error.request) {
            console.log(error.request);
          } else {
            console.log("error : ", error.message);
          }
          console.log(error.config);
        }
      };
      onPress_trading();
    } else {
      const onPress_Retrading = async () => {
        try {
          const response = await api_axios.put(
            "/control_trading",
            {},
            { params: { status: true } }
          );
          console.log("trading restart", response.data);
        } catch (error) {
          if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else if (error.request) {
            console.log(error.request);
          } else {
            console.log("error : ", error.message);
          }
          console.log(error.config);
        }
      };
      onPress_Retrading();
    }
  };

  const setStatus_stop = () => {
    const temp = BotData.map((data) =>
      data.id === Id ? { ...data, status: "stop" } : data
    );
    setBotData(temp);
    setIcon(false);
    const onPress_Stoptrading = async () => {
      try {
        const response = await api_axios.put(
          "/control_trading",
          {},
          {
            params: {
              status: false,
            },
          }
        );
      } catch (error) {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log("error : ", error.message);
        }
        console.log(error.config);
      }
    };
    onPress_Stoptrading();
  };

  const onPress_start = () => {
    // Alert.alert(
    //   "거래를 시작하겠습니까?",
    //   "",
    //   [
    //     { text: "cancel", style: "cancel" },
    //     {
    //       text: "start",
    //       onPress: () => {
    //         setStatus_run();
    //       },
    //       style: "destructive",
    //     },
    //   ],
    //   {
    //     cancelable: true,
    //   }
    // );
    setStatus_run();
  };

  const onPress_stop = () => {
    const cur_icon = "stop";

    // Alert.alert(
    //   "거래를 중지하겠습니까?",
    //   "",
    //   [
    //     { text: "cancel", style: "cancel" },
    //     {
    //       text: "stop",
    //       onPress: () => {
    //         setStatus_stop();
    //       },
    //       style: "destructive",
    //     },
    //   ],
    //   {
    //     cancelable: true,
    //   }
    // );
    setStatus_stop();
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
        onPress={icon === true ? onPress_stop : onPress_start}
      >
        {icon === true ? (
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
