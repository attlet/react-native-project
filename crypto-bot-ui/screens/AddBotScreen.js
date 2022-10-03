import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function AddBotScreen() {
    return (
        <View style={styles.root}>
            <Text>Add Bot</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
    },
});

export default AddBotScreen;