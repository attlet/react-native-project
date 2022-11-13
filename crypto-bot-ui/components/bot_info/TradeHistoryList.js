import React, { useContext, useEffect } from "react";
import { FlatList, RefreshControl, StyleSheet, Text, View } from "react-native";
import api_axios from "../../api/client";
import BotContext from "../../contexts/BotContext";
import { list_theme } from "../../Theme";

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
    time: "2020-09-18 18:41:39",
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
    time: "2020-09-18 18:41:39",
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
    time: "2020-09-18 18:41:39",
  },
];

const Item = ({ item }) => {
  return (
    <View style={styles.item_container}>
      <View style={styles.header_container}>
        <Text style={styles.symbol_text}>BTC/USDT</Text>
        <Text style={styles.title_text}>{item.positionSide}</Text>
        <Text style={styles.title_text}>{item.time}</Text>
      </View>
      <View style={styles.row_container}>
        <Text style={styles.title_text}>Realized PNL (USDT)</Text>
        <Text style={styles.content_text}>{item.realizedPnl}</Text>
      </View>
    </View>
  );
};

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

function TradeHistoryList() {
  const [refreshing, setRefreshing] = React.useState(false);
  const { TradeLog, setTradeLog } = useContext(BotContext);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(200).then(() => setRefreshing(false));
  }, []);

  const renderItem = ({ item }) => <Item item={item} />;

  useEffect(() => {
    console.log("load call");
    async function load_trade_log() {
      try {
        const response = await api_axios.get("/trade_log");
        console.log("trade log : ", response.data);
        setTradeLog(response.data);
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
      }
    }
    load_trade_log();
  }, []);

  return (
    <FlatList
      data={TradeLog}
      renderItem={renderItem}
      contentContainerStyle={styles.root}
      keyExtractor={(item) => item.id}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    />
  );
}

const styles = list_theme;

export default TradeHistoryList;
