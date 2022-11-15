import React from "react";
import { View, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer'
import BotListScreen from "../../screens/BotListScreen";
import CryptoTracker from "../../screens/CryptoTracker";

const Drawer = createDrawerNavigator();

function HeaderRight({onPress}) {
    return (  <MaterialIcons name="logout" size={24} color="black" onPress={onPress} style={styles.icon} />);
  }

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
    <Drawer.Navigator screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: 'transparent',
          elevation: 0,
          shadowOpacity: 0,
        },
        headerTitle: '',
      }}
      >
        <Drawer.Screen name="Bot List" component={BotListScreen} 
        options={{
        //   headerTitle: () => (
        //     <Image style={{ width: 100,height:40,resizeMode: 'contain' }} source={require("./assets/images/logo_J.png")} />
        //   ),
          headerTitleAlign: 'center',
          headerRight: ()=> <HeaderRight onPress={onPress}/>,
          headerRightContainerStyle: {paddingRight: 10},
          headerLeftContainerStyle: {paddingRight: 10}
        }}/> 
        <Drawer.Screen name="Crypto Card View" component={CryptoTracker} 
        options={{
        //   headerTitle: () => (
        //     <Image style={{ width: 100,height:40,resizeMode: 'contain' }} source={require("./assets/images/logo_J.png")} />
        //   ),
          headerTitleAlign: 'center',
          headerRight: ()=> <HeaderRight onPress={onPress}/>,
          headerRightContainerStyle: {paddingRight: 10},
          headerLeftContainerStyle: {paddingRight: 10}
        }}/> 
        <Drawer.Screen name="Guide Line" component={ReadingRoom} /> 
        <Drawer.Screen name="My page" component={TotalUses} /> 
      </Drawer.Navigator >
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
    marginHorizontal: 8
  },
});

export default BotListHeader;
