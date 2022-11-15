import React, { Component } from "react";
import { StyleSheet, Platform, StatusBar } from 'react-native';
import { Container, Content, Root, View, Spinner } from "native-base";

function CryptoTracker() {
  return (
    <Root>
      <View style={styles.container}>
        <Container>
          <TitleBar title="Crypto Tracker" />
          <Content>
            <Coin />
          </Content>
        </Container>
      </View>
    </Root>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default CryptoTracker;