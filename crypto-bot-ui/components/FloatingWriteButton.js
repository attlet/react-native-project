import React, { useContext, useEffect } from "react";
import { Alert, Platform, Pressable, StyleSheet, View } from "react-native";
// import Icon from 'react-native-vector-icons/MaterialIcons';
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import BotContext from "../contexts/BotContext";

function FloatingWriteButton({ right, bottom, icon }) {
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

  

  const onPress_add = () => {
    navigation.navigate("AddBot", {
      data: BotData,
      onAdd: AddBotData,
    });
  };
  const onPress_delete = () => {
    const temp = checked;
    const new_data = BotData.filter((data) => !checked.has(data.id));
    setBotData(new_data);
    setChecked(new Set());
  };
  
  const onPrss_askdelete = () => {
    Alert.alert(
      "선택한 봇들을 삭제하겠습니까?",
      "",
      [
        {text: "cancel", style: 'cancel'},
        {
          text: "delete",
          onPress: () => {
            onPress_delete();
        },
          style: 'destructive',
        },
      ],
      {
        cancelable: true
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
        onPress={icon === "plus" ? onPress_add : onPrss_askdelete}
      >
        {icon === "plus" ? (
          <AntDesign name={icon} size={24} color="black" />
        ) : (
          <MaterialCommunityIcons name={icon} size={24} color="black" />
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

export default FloatingWriteButton;
