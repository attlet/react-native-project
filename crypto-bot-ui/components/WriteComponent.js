import React, { useState, useRef, useContext, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Keyboard,
  Alert,
  Platform,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import api_axios from "../api/client";
import KeyboardView from "./keyboard/KeyboardView";
import WriteContext from "../contexts/WriteContext";
import Checkbox from "expo-checkbox";
import { FlatList } from "react-native-gesture-handler";
import DropDownPicker from "react-native-dropdown-picker";

function WriteComponent() {
  const name_ref = useRef();
  const amount_ref = useRef();
  const method_ref = useRef();
  const buystoploss_ref = useRef();
  const sellstoploss_ref = useRef();
  const leverage_ref = useRef();

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
    leverage,
    setLeverage,
    botCheck,
    setBotcheck,
  } = useContext(WriteContext);

  // const [botCheck, setBotcheck] = useState([
  //   {
  //     id: 1,
  //     bot: "test1",
  //     isCheck: false,
  //   },
  //   {
  //     id: 2,
  //     bot: "test2",
  //     isCheck: false,
  //   },
  //   {
  //     id: 3,
  //     bot: "test3",
  //     isCheck: false,
  //   },
  //   {
  //     id: 4,
  //     bot: "test4",
  //     isCheck: false,
  //   },
  //   {
  //     id: 5,
  //     bot: "test5",
  //     isCheck: false,
  //   },
  //   {
  //     id: 6,
  //     bot: "test6",
  //     isCheck: false,
  //   },
  //   {
  //     id: 7,
  //     bot: "test7",
  //     isCheck: false,
  //   },
  // ]); //알려주는 걸 넣는 곳.
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "btc/usdt", value: "btc" },
    { label: "eth/usdt", value: "eth" },
  ]);

  const onChange = (e) => {
    console.log(e);
    setTest1(e);
  };

  const handleChange = (id) => {
    
    let temp = botCheck.map((data) => {
      if (id === data.id) {
        return { ...data, isCheck: !data.isCheck };
      }
      return data;
    });
    setBotcheck(temp);
  };

  useEffect(()=>{
    console.log(botCheck);
  },[botCheck]);

  const Item = ({ item }) => {

    return (
      <View style={styles.botSignalcheck}>
        <Checkbox
          value={item.isCheck}
          onValueChange={() => {
            handleChange(item.id);
          }}
          color={item.isCheck ? "tomato" : undefined}
        />
        <Text style={styles.botSignalText}>{item.bot}</Text>
      </View>
    );
  };



  return (
    <ScrollView nestedScrollEnabled={true}>
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

        <View style={styles.inputWrapper}>
          <View style={styles.symbolWrapper}>
            <Text style={styles.symbolTitle}>Select Symbol : </Text>

            <View style={[styles.symbolRight]}>
              <DropDownPicker
                placeholder="Select symbol"
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                closeAfterSelecting={true}
                dropDownDirection="AUTO"
                listMode="SCROLLVIEW"
              />
            </View>
          </View>
        </View>

        <View style={styles.leverageWrapper}>
          <Text style={styles.leverageTitle}>leverage : </Text>
          <View style={styles.leverageRight}>
            <TextInput
              placeholder="Max : 20.0"
              style={styles.leverageInput}
              onChangeText={(leverage) => {
                setLeverage(leverage);
              }}
              value={leverage}
              ref={leverage_ref}
            />
          </View>
        </View>

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
            <FlatList
              data={botCheck}
              renderItem={Item}
              nestedScrollEnabled={true}
            />

            {/* <View style={styles.botSignalcheck}>
              <Checkbox
                value={test1}
                onValueChange={onChange}
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
              <Text style={styles.botSignalText}>test3</Text> */}
            {/* </View> */}
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
    zIndex: 100,
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
    marginBottom: 10,
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
    marginBottom: 10,
    paddingLeft: 4,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "gray",
  },
  symbolWrapper: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  symbolTitle: {
    flex: 1,
  },
  symbolRight: {
    flex: 1,
    marginBottom: 10,
    zIndex: Platform.OS === "ios" ? 100 : null,
  },
  leverageWrapper: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    marginBottom: 25,
  },
  leverageTitle: {
    flex: 1,
  },
  leverageRight: {
    flex: 1,
    marginBottom: 10,
  },
  leverageInput: {
    flex: 1,
    fontSize: 14,
    marginHorizontal: 20,
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
