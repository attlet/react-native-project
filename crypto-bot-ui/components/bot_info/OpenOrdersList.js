import React, { useContext, useState, useCallback } from 'react';
import { FlatList, RefreshControl, StyleSheet, Text, View } from 'react-native';
import BotContext from '../../contexts/BotContext';
import { list_theme, theme } from '../../Theme';

const DATA = [
    {
        id: 1,
        positionSide: "LONG",
        orderType: "Limit",
        symbol: "BTCUSDT",
        price: "18015.300",
        qty: "0.008",
        tmp_qty: "0.000",
        time: "2020-09-18 18:41:39"
    }
];

const Item = ({ item }) => {
    

    return (
        <View style={styles.item_container}>
            <View style={styles.header_container}>
                <Text style={styles.symbol_text}>BTC/USDT</Text>
                <Text style={styles.title_text}>{item.time}</Text>
            </View>
            <View style={styles.row_container}>
                <Text style={styles.content_text}>{item.positionSide}</Text>
            </View>
            <View style={styles.row_container}>
                <View>
                    <Text style={styles.title_text}>Amount</Text>
                    <Text style={styles.content_text}>{item.tmp_qty}/{item.qty}</Text>
                </View>
                <View style={styles.rigth_side_view}>
                    <Text style={styles.title_text}>Price</Text>
                    <Text style={styles.content_text}>{item.price}</Text>
                </View>
            </View>
        </View>
    );
}

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}

function OpenOrderList() {
    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        wait(200).then(() => setRefreshing(false));
    }, []);

    const renderItem = ({ item }) => (
        <Item item={item} />
    )
    
    return (
        <FlatList
            data={DATA}
            renderItem={renderItem}
            contentContainerStyle={styles.root}
            keyExtractor={item => item.id}
            refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                />
            }
        />
    );
}

const styles = list_theme;

export default OpenOrderList;