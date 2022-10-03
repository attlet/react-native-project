import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { theme } from '../../Theme';

function TotalValue() {
    return (
        <View style={styles.total_info}>
            <Text style={styles.total_info_text}>Total Info</Text>
            <View style={styles.total_value_container}>
                <View style={styles.single_value_container}>
                    <Text style={styles.value_title_text}> Total Value(USDT)</Text>
                    <Text style={styles.value_amount_text}> 0</Text>
                </View>
                <View style={styles.single_value_container}>
                    <Text style={styles.value_title_text}> Bot Value(USDT)</Text>
                    <Text style={styles.value_amount_text}> 0</Text>
                </View>
            </View>
            <View style={styles.total_pnl_container}>
                <Text style={styles.total_pnl_title_text}>Today's PNL/ROE</Text>
                <Text style={styles.total_pnl_amount_text}>0/0%</Text>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    total_info: {
        backgroundColor: theme.color.value_info,
        padding: theme.padding.l,
    },
    total_info_text: {
        fontSize: theme.fontSize.m,
        fontWeight: 'bold',
    },
    total_value_container: {
        flexDirection: 'row',
    },
    single_value_container: {
        flex: 1,
        borderRightWidth: 1.5,
        paddingTop: theme.padding.s,
    },
    value_title_text: {
        fontSize: theme.fontSize.s,
        paddingLeft: theme.padding.m,
    },
    value_amount_text: {
        fontSize: theme.fontSize.l,
        paddingLeft: theme.padding.m,
        fontWeight: 'bold',
    },
    total_pnl_container: {
        paddingTop: theme.padding.s,
    },
    total_pnl_title_text: {
        fontSize: theme.fontSize.m,
    },
    total_pnl_amount_text: {
        fontSize: theme.fontSize.l,
        fontWeight: 'bold'
    },
});

export default TotalValue;