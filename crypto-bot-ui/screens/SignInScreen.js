import React, { useRef, useState, useContext, useEffect } from "react";
import {
  Text,
  StyleSheet,
  View,
  Modal,
  Animated,
  KeyboardAvoidingView,
  Keyboard,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import BorderedInput from "../components/BorderedInput";
import CustomButton from "../components/CustomButton";
import api_axios from "../api/client";
import BalanceContext from "../contexts/BalanceContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import BotContext from "../contexts/BotContext";

function SignInScreen() {
  const navigation = useNavigation();

  const [visibleModal, setvisibleModal] = useState(false);
  // const [apiKey, setApiKey] = useState("");
  // const [secret, setSecret] = useState("");
  const [userValue, setUser] = useState([]);
  const [apiError, setapiError] = useState("api 확인 중");

  const { balance, setBalance } = useContext(BalanceContext);
  const {apiKey, setApiKey, secret, setSecret} = useContext(BotContext);
  
  const api_ref = useRef();
  const secret_ref = useRef();

  const onPress_logIn = () => {
    setvisibleModal(true);

    const getData = async () => {
      try {
        const response = await api_axios.post("/signIn/", {
          api_key: apiKey,
          secret_key: secret,
        });
        let temp = response.data.balance;
        setUser(response.data);
        setBalance(temp);
        setvisibleModal(false);

        console.log(response.data);
        console.log(apiKey);
        console.log(secret);
        console.log(temp);
        console.log(balance);
        navigation.navigate("BotList");
      } catch (error) {
        if (error.response) {
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
        setapiError("api 키 오류");
        setTimeout(2000);
        setvisibleModal(false);
      }
    };

    getData();
  };

  useEffect(() => {
    async function load_api() {
      try {
        const temp_api = await AsyncStorage.getItem("api_key");
        setApiKey(temp_api);
      } catch (e) {
        console.log("Failed to load api key: ", e);
      }
    }
    load_api();
  }, []);

  useEffect(() => {
    async function load_secret() {
      try {
        const temp_secret = await AsyncStorage.getItem("secret_key");
        setSecret(temp_secret);
      } catch (e) {
        console.log("Failed to load secret key: ", e);
      }
    }
    load_secret();
  }, []);

  useEffect(() => {
    async function save_api() {
      try {
        await AsyncStorage.setItem("api_key", apiKey);
      } catch (e) {
        console.log("Failed to save api key: ", e);
      }
    }
    save_api();
  }, [apiKey]);

  useEffect(() => {
    async function save_secret() {
      try {
        await AsyncStorage.setItem("secret_key", secret);
      } catch (e) {
        console.log("Failed to save secret key: ", e);
      }
    }
    save_secret();
  }, [secret]);

  return (
    <SafeAreaView style={styles.fullscreen}>
      <Modal
        animationType="slide"
        presentationStyle="formSheet"
        visible={visibleModal}
      >
        <View style={styles.modalView}>
          <Text style={styles.modalText}>{apiError}</Text>
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
          <CustomButton
            onPress={onPress_logIn}
            title="Submit"
            hasMarginBottom
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  fullscreen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 32,
    fontWeight: "bold",
  },
  form: {
    marginTop: 64,
    width: "100%",
    paddingHorizontal: 16,
  },
  buttons: {
    marginTop: 64,
  },
  modalText: {
    fontSize: 14,
    fontWeight: "bold",
  },
  modalView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
});

export default SignInScreen;
