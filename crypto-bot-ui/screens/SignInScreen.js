import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import BorderedInput from '../components/BorderedInput';
import CustomButton from '../components/CustomButton';

function SignInScreen() {
  const navigation = useNavigation();

  const onPress_logIn = () => {
    navigation.navigate('BotList')
  };

  return (
    <SafeAreaView style={styles.fullscreen}>
      <Text style={styles.text}>Crypt-Auto</Text>
      <View style={styles.form}>
        <BorderedInput hasMarginBottom placeholder="api_key" />
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
});

export default SignInScreen;
