import React, { useState, useEffect } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Card from "../components/tracking/Card";
import { getMarketData } from "../service/cryptoService";

function Tracker() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchMarketData = async () => {
      const marketData = await getMarketData
      setData(marketData);
    };

    fetchMarketData();
    console.log(data);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        keyExtractor={(item) => item.id}
        data={data}
        renderItem={({ item }) => {
          <Card
            name={item.name}
            symbol={item.symbol}
            currentPrice={item.current_price}
            priceChangePercentage7d={
              item.price_change_percentage_7d_in_currency
            }
            logoUrl={item.image}
          />;
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Tracker;
