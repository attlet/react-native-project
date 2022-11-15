import React from "react";
import { View, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";


function BotListHeader() {
  const navigation = useNavigation();

  const onPress = () => {
    Alert.alert(
      "로그아웃 하시겠습니까?",
      "",
      [
        { text: "cancel", style: "cancel" },
        {
          text: "logout",
          onPress: () => navigation.navigate("SignIn"),
          style: "destructive",
        },
      ],
      {
        cancelable: true,
      }
    );
  };

 
  return (
    <View style={styles.block}>
      <MaterialIcons name="logout" size={24} color="black" onPress={onPress} style={styles.icon} />
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
  icon: {
    marginHorizontal: 8
  },
});

export default BotListHeader;
