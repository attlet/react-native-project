import React from 'react';
import { FlatList, RefreshControl, StyleSheet, Text, View } from 'react-native';
import { list_theme } from '../../Theme';

const DATA = [
    {
        buyer: false,
        commission: "-0.07819010",
        commissionAsset: "USDT",
        id: 698759,
        maker: false,
        orderId: 25851813,
        price: "7819.01",
        qty: "0.002",
        quoteQty: "15.63802",
        realizedPnl: "-0.91539999",
        side: "SELL",
        positionSide: "SHORT",
        symbol: "BTCUSDT",
        time: '2020-09-18 18:41:39'
    },
    {
        buyer: false,
        commission: "-0.07819010",
        commissionAsset: "USDT",
        id: 698739,
        maker: false,
        orderId: 25851813,
        price: "7819.01",
        qty: "0.002",
        quoteQty: "15.63802",
        realizedPnl: "-0.91539999",
        side: "SELL",
        positionSide: "SHORT",
        symbol: "BTCUSDT",
        time: '2020-09-18 18:41:39'
    },
    {
        buyer: false,
        commission: "-0.07819010",
        commissionAsset: "USDT",
        id: 6982759,
        maker: false,
        orderId: 25851813,
        price: "7819.01",
        qty: "0.002",
        quoteQty: "15.63802",
        realizedPnl: "-0.91539999",
        side: "SELL",
        positionSide: "SHORT",
        symbol: "BTCUSDT",
        time: '2020-09-18 18:41:39'
    }
];

const Item = ({ item }) => {
    return (
        <View style={styles.item_container}>
            <View style={styles.header_container}>
                <Text style={styles.symbol_text}>{item.symbol}</Text>
                <Text style={styles.title_text}>{item.positionSide}</Text>
                <Text style={styles.title_text}>{item.time}</Text>
            </View>
            <View style={styles.row_container}>
                <Text style={styles.title_text}>Realized PNL (USDT)</Text>
                <Text style={styles.content_text}>{item.realizedPnl}</Text>
            </View>
        </View>
    );
}

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}

function TradeHistoryList() {
    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(200).then(() => setRefreshing(false));
    }, []);

    const renderItem = ({ item }) => (
        <Item item={item} />
    );

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

export default TradeHistoryList;