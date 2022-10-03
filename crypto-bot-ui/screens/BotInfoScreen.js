import React from 'react';
import { StyleSheet, View } from 'react-native';
import BotHistoryTab from '../components/bot_info/BotHistoryTab';
import BotValue from '../components/bot_info/BotValue';

function BotListScreen() {
    return (
        <View style={styles.root}>
            <BotValue />
            <BotHistoryTab />
        </View>
    )
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
    },
});

export default BotListScreen;