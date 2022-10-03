import React from 'react';
import { FlatList, RefreshControl, Text, View } from 'react-native';
import { list_theme } from '../../Theme';

const DATA = [
    {
        id: 1,
        entryPrice: "0.00000",
        marginType: "isolated",
        isAutoAddMargin: "false",
        isolatedMargin: "0.00000000",
        leverage: "10",
        liquidationPrice: "0",
        markPrice: "6679.50671178",
        maxNotionalValue: "20000000",
        positionAmt: "0.000",
        notional: "0",
        isolatedWallet: "0",
        symbol: "BTCUSDT",
        unRealizedProfit: "0.00000000",
        positionSide: "BOTH",
        updateTime: 0
    }
];

const Item = ({ item }) => {
    return (
        <View style={styles.item_container}>
            <View style={styles.header_container}>
                <Text style={styles.symbol_text}>{item.symbol}</Text>
                <Text style={styles.title_text}>{item.positionSide}</Text>
                <Text style={styles.title_text}>{item.marginType} {item.leverage}x</Text>
            </View>
            <View style={styles.row_container}>
                <View>
                    <Text style={styles.title_text}>Unrealized PNL (USDT)</Text>
                    <Text style={styles.content_text}>{item.unRealizedProfit}</Text>
                </View>
                <View style={styles.rigth_side_view}>
                    <Text style={styles.title_text}>ROE</Text>
                    <Text style={styles.content_text}>0%</Text>
                </View>
            </View>
            <View style={styles.row_container}>
                <View>
                    <Text style={styles.title_text}>Amount</Text>
                    <Text style={styles.content_text}>{item.positionAmt}</Text>
                </View>
                <View style={styles.rigth_side_view}>
                    <Text style={styles.title_text}>Entry Price</Text>
                    <Text style={styles.content_text}>{item.entryPrice}</Text>
                </View>
            </View>
        </View>
    );
}

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}

function PositionsList() {
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

export default PositionsList;