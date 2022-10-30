import React, { useState, useRef } from "react"; 
import { View , StyleSheet, TextInput} from "react-native";
import CustomButton from "./CustomButton";
import api_axios from "../api/client";
import CalculatorButton from "./CalculatorButton";

function WriteComponent() {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [method, setMethod] = useState('');
  const name_ref = useRef();
  const amount_ref = useRef();
  const method_ref = useRef();
  
  const onPress = (text) => {
    const temp = method;
    temp = temp + text;
    setMethod(temp);
  };
  const onPress_submit = () => {
    const getData = async () => {
      try {
        const response = await api_axios.post('/addBot/', {
            name : name,
            amount : amount,
            stragies : method
        });
        console.log("submit success: ", response.data);
      } catch (error) {
        console.log("submit error:", error);
      }
    };
    getData();
  };

  return (
    <View style={styles.block}>
      <TextInput
        placeholder="bot name"
        style={styles.nameInput}
        onChangeText={(name)=> {setName(name)}}
        value={name}
        ref={name_ref}
        onSubmitEditing={() => {amount_ref.current.focus()}}
      />
      <TextInput
        placeholder="amount to trading"
        style={styles.amountInput}
        onChangeText={(amount)=> {setName(amount)}}
        value={amount}
        ref={amount_ref}
        onSubmitEditing={() => {method_ref.current.focus()}}
      />
      <TextInput
        placeholder="you can write here your stragies using these keywords"
        style={styles.methodInput}
        onChangeText={(method) => {setMethod(method)}}
        value={method}
        ref={method_ref}
        multiline
        textAlignVertical="top"
        onSubmitEditing={onPress_submit}
      />
      <CalculatorButton text="(" onPress={onPress}/>
     
      
      <View style={styles.buttons}>
        <CustomButton onPress={onPress_submit} title="Submit" hasMarginBottom />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  block : {
    flex : 1,
    padding: 16,
  },
  nameInput: {  
    paddingVertical : 0,
    fontSize: 18,
    marginBottom : 25,
    fontWeight : 'bold',
    borderBottomWidth : 1,
    borderBottomColor : 'gray',
  },
  amountInput: {
    fontSize : 16,
    paddingVertical : 2,
    marginBottom : 16,
    borderBottomWidth : 1,
    borderBottomColor : 'gray',
  },
  methodInput: {
    flex : 1,
    fontSize : 16,
    paddingVertical : 10,
    
  }
})
export default WriteComponent;
