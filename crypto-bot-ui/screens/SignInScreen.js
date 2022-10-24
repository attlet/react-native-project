import React, { useRef, useState, useEffect } from 'react';
import {Text, StyleSheet, View, Modal, Animated, KeyboardAvoidingView, Keyboard} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import BorderedInput from '../components/BorderedInput';
import CustomButton from '../components/CustomButton';
import api_axios from '../api/client';
import axios from "axios";


function SignInScreen() {
  const navigation = useNavigation();

  const [visibleModal, setvisibleModal] = useState(false);
  const [apiKey, setApiKey] = useState('');
  const [secret, setSecret] = useState('');
  const api_ref = useRef();
  const secret_ref = useRef();

  const url = 'http://127.0.0.1:8000';


  // useEffect(() => {
  //   const getData = async () => {
  //     const response = await axios.post(url + "/signIn")
  //     .then(function(response){
  //       return response;
  //     })
  //     .catch(function(error){
  //       console.log(error);
  //     });
  //   };
  //   getData();
  // }, []);

  const onPress_logIn = () => {
    const getData = async () => {
        const response = await axios.post(url + '/signIn/', {
          api_key : apiKey,
          secret_key : secret,
        })
        .then(function(response){
           console.log(response);
        })
        .catch(function(error){
          console.log(error);
        });
      }
    getData();
    console.log(apiKey);
    console.log(secret);
    // setvisibleModal(true);
    // navigation.navigate('BotList');
  
}
 


  return (
    <SafeAreaView style={styles.fullscreen}>
      <Modal
        animationType='slide'
        presentationStyle='formSheet'
        visible={visibleModal} >
          <View style = {styles.modalView}>
            <Text style={styles.modalText}>API확인 중</Text>
          </View>
      </Modal>
      <Text style={styles.text}>Crypt-Auto</Text>
      <View style={styles.form}>
        <BorderedInput 
          hasMarginBottom 
          placeholder="api_key"
          blurOnSubmit={true}
          value={apiKey}
          onChangeText={(apiKey) => setApiKey(apiKey)}
          ref={api_ref}
          onSubmitEditing={() => secret_ref.current.focus()}
          />
        <BorderedInput 
          hasMarginBottom 
          placeholder="secret_key"
          blurOnSubmit={true}
          value={secret}
          onChangeText={(secret) => setSecret(secret)}
          ref={secret_ref}
          onSubmitEditing={onPress_logIn}
          />
        <View style={styles.buttons}>
          <CustomButton onPress={onPress_logIn} title="Submit" hasMarginBottom />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  fullscreen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  form: {
    marginTop: 64,
    width: '100%',
    paddingHorizontal: 16,
  },
  buttons: {
    marginTop: 64,
  },
  modalText: {
    fontSize : 14,
    fontWeight : 'bold',
  },
  modalView: {
    flex  :1,
    justifyContent : 'center',
    alignItems : 'center',
    padding: 20,
  }
});

export default SignInScreen;
