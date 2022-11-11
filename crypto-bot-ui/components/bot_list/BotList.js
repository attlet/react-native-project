import React, { useState, useContext, useEffect } from "react";
import {
  FlatList,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { list_theme } from "../../Theme";
import BotContext from "../../contexts/BotContext";
import Empty from "./Empty";
import { AntDesign } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Item = ({ item, AddChecked_func, DeleteChecked_func, checked }) => {
  const navigation = useNavigation();
  const [clickCircle, setClickCircle] = useState(false);
  const {BotData, setBotData} = useContext(BotContext);

  const onPress = () => {
    navigation.navigate("BotInfo", { id: item.id, status: item.status });
  };

  useEffect(() => {
    if (clickCircle === true) {
      AddChecked_func(item.id);
    } else {
      DeleteChecked_func(item.id);
    }
  }, [clickCircle]);

  const onPress_check = () => {
    setClickCircle(!clickCircle);
  };
  return (
    <View style={styles_add.rootBlock}>
      <TouchableOpacity
        style={[styles_add.circle, clickCircle && styles_add.checkedCircle]}
        onPress={onPress_check}
      >
        {clickCircle && <AntDesign name="check" size={18} color="white" />}
      </TouchableOpacity>

      <View style={styles.item_container}>
        <TouchableOpacity onPress={onPress}>
          <View style={styles.header_container}>
            <Text style={styles.symbol_text}>{item.name}</Text>
            {/* <Text style={styles.title_text}>{item.type}</Text> */}
            <Text style={[styles.title_text, item.status === "stop" ? styles_add.type_stop : styles_add.type_running ]}>{item.status}</Text>
          </View>
          <View style={styles.row_container}>
            <View>
              <Text style={styles.title_text}>Value</Text>
              <Text style={styles.content_text}>{item.amount}</Text>
            </View>
            <View style={styles.rigth_side_view}>
              <Text style={styles.title_text}>PNL/ROE</Text>
              <Text style={styles.content_text}>
                {item.pnl + "/" + item.roe + "%"}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

function BotList() {
  const { checked, BotData, setBotData, AddChecked_func, DeleteChecked_func } =
    useContext(BotContext);

 

  const renderItem = ({ item }) => (
    <Item
      item={item}
      AddChecked_func={AddChecked_func}
      DeleteChecked_func={DeleteChecked_func}
      checked={checked}
    />
  );
  
  return (
    <>
      {BotData.length === 0 ? (
        <Empty />
      ) : (
        <FlatList
          ItemSeparatorComponent={() => <View style={styles_add.seperator} />}
          style={styles_add.list}
          data={BotData}
          renderItem={renderItem}
          contentContainerStyle={styles.root}
          keyExtractor={(item) => item.id}
        />
      )}
    </>
  );
}

const styles = list_theme;
const styles_add = StyleSheet.create({
  rootBlock: {
    alignItems: "center",
    flexDirection: "row",
  },
  circle: {
    width: 22,
    height: 22,
    borderRadius: 12,
    borderColor: "orange",
    borderWidth: 1,
    marginHorizontal: 16,
  },
  checkedCircle: {
    backgroundColor: "tomato",
    justifyContent: "center",
    alignItems: "center",
  },
  list: {
    flex: 1,
  },
  seperator: {
    backgroundColor: "#9e9e9e",
    height: 1,
  },
  type_stop: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 18
  },
  type_running: {
    color: 'green',
    fontWeight: 'bold',
    fontSize: 18
  },
});
export default BotList;
