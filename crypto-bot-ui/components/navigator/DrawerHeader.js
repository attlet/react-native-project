import React from "react";
import { View, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import BotListScreen from "../../screens/BotListScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Tracker from "../../screens/Tracker";
import RootStack from "../../screens/RootStack";

const Drawer = createDrawerNavigator();

function HeaderRight({ onPress }) {
  return (
    <MaterialIcons
      name="logout"
      size={24}
      color="black"
      onPress={onPress}
      style={styles.icon}
    />
  );
}

function DrawerHeader() {
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
    <Drawer.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: "transparent",
          elevation: 0,
          shadowOpacity: 0,
        },
        headerTitle: "",
      }}
      initialRouteName="Bot List"     
    >
      <Drawer.Screen
        name="Bot List"
        component={RootStack}
        options={{
          headerTitleAlign: "center",
          headerRight: () => <HeaderRight onPress={onPress} />,
          headerRightContainerStyle: { paddingRight: 10 },
          headerLeftContainerStyle: { paddingRight: 10 },
        
        }}
      />
      <Drawer.Screen
        name="Crypto Card View"
        component={Tracker}
        options={{
          //   headerTitle: () => (
          //     <Image style={{ width: 100,height:40,resizeMode: 'contain' }} source={require("./assets/images/logo_J.png")} />
          //   ),
          headerTitleAlign: "center",
          headerRight: () => <HeaderRight onPress={onPress} />,
          headerRightContainerStyle: { paddingRight: 10 },
          headerLeftContainerStyle: { paddingRight: 10 },
        }}
      />
    </Drawer.Navigator>
    // <View style={styles.block}>
    //   <MaterialIcons name="menu" size={24} color="black" />
    //   <MaterialIcons name="logout" size={24} color="black" onPress={onPress} style={styles.icon} />
    // </View>
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
    marginHorizontal: 20,
  },
  header : {
    marginBottom : 20,
  }
});

export default DrawerHeader;
