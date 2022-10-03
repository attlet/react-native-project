import React from 'react';
import { StyleSheet, View } from 'react-native';
import TotalValue from '../components/bot_list/TotalValue';
import BotList from '../components/bot_list/BotList';
import FloatingWriteButton from '../components/FloatingWriteButton';

function BotListScreen() {
    return (
        <View style={styles.root}>
            <TotalValue />
            <BotList />
            <FloatingWriteButton />
        </View>
    )
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
    },
});

export default BotListScreen;