import React, { useEffect, useState, useRef } from "react";
import { StyleSheet, Text, TextInput, View, ViewComponent } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SelectDropdown from "react-native-select-dropdown"; //npm install react-native-select-dropdown
import api_axios from "../api/client";
import BorderedInput from "../components/BorderedInput";
import CustomButton from "../components/CustomButton";
import WriteComponent from "../components/WriteComponent";

function AddBotScreen() {

  const [inputDataArray, setInputArr] = useState([]);

  return (
    <SafeAreaView style={styles.root}>
      <WriteComponent/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor : 'white',
  },
});

export default AddBotScreen;


/*
viewdata.map((value, idx, array) => {
  const inputs = {
    name: value.title,
    data: "",
  };
  setInputArr([...inputDataArray, inputs]);

  switch (value.type) {
    case "text":
      return (
        <View style={styles.inputView} key={com_cnt}>
          <Text>{value.title} : </Text>
          <BorderedInput
            hasMarginBottom
            placeholder={value.gray}
            //value={inputDataArray.data}
            onChangeText={(inputText, idx) => {
              setInputText(inputText.data);
            }}
          />
        </View>
      );

    case "select":
      return (
        <View style={styles.inputView} key={com_cnt}>
          <Text>{value.title} : </Text>
          <SelectDropdown
            data={value.item}
            onSelect={(selectedItem, index) => {
              setInputSelect(selectedItem.data);
              console.log(selectedItem);
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
          />
        </View>
      );
      com_cnt = com_cnt + 1;
  }
  */